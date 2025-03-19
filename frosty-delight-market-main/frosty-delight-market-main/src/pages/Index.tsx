
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize section animation observers
  useEffect(() => {
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      const sections = document.querySelectorAll('.section-animated');
      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };

    // Slight delay to ensure everything is rendered
    const timer = setTimeout(observeElements, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
      <Cart />
    </div>
  );
};

export default Index;
