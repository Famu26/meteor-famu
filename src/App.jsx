import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar page={page} navigate={navigate} />

      <div key={page} className="page-enter">
        {page === 'home'         && <Hero navigate={navigate} />}
        {page === 'services'     && <Services />}
        {page === 'testimonials' && <Testimonials />}
        {page === 'contact'      && <Contact />}
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}
