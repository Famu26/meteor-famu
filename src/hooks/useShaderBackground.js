import { useRef, useEffect } from 'react';

const SHADER_SOURCE = `#version 300 es
/*
 * Nebula / smoke shader — adapted from Matthias Hurrle (@atzedent)
 */
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 move;
uniform vec2 touch;
uniform int pointerCount;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p = fract(p * vec2(12.9898, 78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(in vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3. - 2. * f);
  float a = rnd(i), b = rnd(i + vec2(1,0)), c = rnd(i + vec2(0,1)), d = rnd(i + 1.);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float t = .0, a = 1.;
  mat2 m = mat2(1., -.5, .2, 1.2);
  for (int i = 0; i < 5; i++) { t += a * noise(p); p *= 2. * m; a *= .5; }
  return t;
}

float clouds(vec2 p) {
  float d = 1., t = .0;
  for (float i = .0; i < 3.; i++) {
    float a = d * fbm(i * 10. + p.x * .2 + .2 * (1. + i) * p.y + d + i * i + p);
    t = mix(t, d, a);
    d = a;
    p *= 2. / (i + 1.);
  }
  return t;
}

void main(void) {
  vec2 uv = (FC - .5 * R) / MN, st = uv * vec2(2, 1);
  vec3 col = vec3(0);
  float bg = clouds(vec2(st.x + T * .5, -st.y));
  uv *= 1. - .3 * (sin(T * .2) * .5 + .5);
  for (float i = 1.; i < 12.; i++) {
    uv += .1 * cos(i * vec2(.1 + .01 * i, .8) + i * i + T * .5 + .1 * uv.x);
    vec2 p = uv;
    float d = length(p);
    col += .00125 / d * (cos(sin(i) * vec3(1, 2, 3)) + 1.);
    float b = noise(i + p + bg * 1.731);
    col += .002 * b / length(max(p, vec2(b * p.x * .02, p.y)));
    col = mix(col, vec3(bg * .25, bg * .137, bg * .05), d);
  }
  O = vec4(col, 1);
}`;

class WebGLRenderer {
  constructor(canvas, scale) {
    this.canvas = canvas;
    this.scale = scale;
    this.gl = canvas.getContext('webgl2');
    this.program = null;
    this.vs = null;
    this.fs = null;
    this.buffer = null;
    this.mouseMove = [0, 0];
    this.mouseCoords = [0, 0];
    this.pointerCoords = [0, 0];
    this.nbrOfPointers = 0;

    this.vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;
    this.vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

    if (this.gl) {
      this.gl.viewport(0, 0, canvas.width, canvas.height);
    }
  }

  compile(shader, source) {
    const { gl } = this;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader error:', gl.getShaderInfoLog(shader));
    }
  }

  reset() {
    const { gl } = this;
    if (!gl || !this.program) return;
    if (!gl.getProgramParameter(this.program, gl.DELETE_STATUS)) {
      if (this.vs) { gl.detachShader(this.program, this.vs); gl.deleteShader(this.vs); }
      if (this.fs) { gl.detachShader(this.program, this.fs); gl.deleteShader(this.fs); }
      gl.deleteProgram(this.program);
    }
  }

  setup() {
    const { gl } = this;
    if (!gl) return;
    this.vs = gl.createShader(gl.VERTEX_SHADER);
    this.fs = gl.createShader(gl.FRAGMENT_SHADER);
    this.compile(this.vs, this.vertexSrc);
    this.compile(this.fs, SHADER_SOURCE);
    this.program = gl.createProgram();
    gl.attachShader(this.program, this.vs);
    gl.attachShader(this.program, this.fs);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(this.program));
    }
  }

  init() {
    const { gl, program } = this;
    if (!gl || !program) return;
    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    program.resolution   = gl.getUniformLocation(program, 'resolution');
    program.time         = gl.getUniformLocation(program, 'time');
    program.move         = gl.getUniformLocation(program, 'move');
    program.touch        = gl.getUniformLocation(program, 'touch');
    program.pointerCount = gl.getUniformLocation(program, 'pointerCount');
    program.pointers     = gl.getUniformLocation(program, 'pointers');
  }

  updateScale(scale) {
    this.scale = scale;
    if (this.gl) this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  updateMove(d)  { this.mouseMove    = d; }
  updateMouse(c) { this.mouseCoords  = c; }
  updatePointerCoords(c) { this.pointerCoords = c; }
  updatePointerCount(n)  { this.nbrOfPointers = n; }

  render(now = 0) {
    const { gl, program } = this;
    if (!gl || !program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.uniform2f(program.resolution, this.canvas.width, this.canvas.height);
    gl.uniform1f(program.time, now * 1e-3);
    gl.uniform2f(program.move, ...this.mouseMove);
    gl.uniform2f(program.touch, ...this.mouseCoords);
    gl.uniform1i(program.pointerCount, this.nbrOfPointers);
    gl.uniform2fv(program.pointers, this.pointerCoords);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

class PointerHandler {
  constructor(element, scale) {
    this.scale = scale;
    this.active = false;
    this.pointers = new Map();
    this.lastCoords = [0, 0];
    this.moves = [0, 0];

    const map = (el, x, y) => [x * this.scale, el.height - y * this.scale];

    element.addEventListener('pointerdown', (e) => {
      this.active = true;
      this.pointers.set(e.pointerId, map(element, e.clientX, e.clientY));
    });
    element.addEventListener('pointerup', (e) => {
      if (this.pointers.size === 1) this.lastCoords = this.first;
      this.pointers.delete(e.pointerId);
      this.active = this.pointers.size > 0;
    });
    element.addEventListener('pointerleave', (e) => {
      if (this.pointers.size === 1) this.lastCoords = this.first;
      this.pointers.delete(e.pointerId);
      this.active = this.pointers.size > 0;
    });
    element.addEventListener('pointermove', (e) => {
      if (!this.active) return;
      this.pointers.set(e.pointerId, map(element, e.clientX, e.clientY));
      this.moves = [this.moves[0] + e.movementX, this.moves[1] + e.movementY];
    });
  }

  get count()  { return this.pointers.size; }
  get move()   { return this.moves; }
  get coords() { return this.pointers.size > 0 ? Array.from(this.pointers.values()).flat() : [0, 0]; }
  get first()  { return this.pointers.values().next().value || this.lastCoords; }
}

export function useShaderBackground() {
  const canvasRef = useRef(null);
  const raf       = useRef(null);
  const renderer  = useRef(null);
  const pointers  = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

    const resize = () => {
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      renderer.current?.updateScale(dpr);
    };

    renderer.current = new WebGLRenderer(canvas, dpr);
    pointers.current = new PointerHandler(canvas, dpr);
    renderer.current.setup();
    renderer.current.init();
    resize();

    const loop = (now) => {
      const r = renderer.current;
      const p = pointers.current;
      if (r && p) {
        r.updateMouse(p.first);
        r.updatePointerCount(p.count);
        r.updatePointerCoords(p.coords);
        r.updateMove(p.move);
        r.render(now);
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (raf.current) cancelAnimationFrame(raf.current);
      renderer.current?.reset();
    };
  }, []);

  return canvasRef;
}
