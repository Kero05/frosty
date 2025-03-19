
import React, { useRef, useEffect } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-cream-50 section-animated" style={{ transitionDelay: '200ms' }}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1556156653-e5a7c69cc4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                  alt="Ice cream maker crafting artisanal ice cream"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 hidden md:block">
                <div className="w-full h-full bg-white rounded-2xl shadow-soft -rotate-6"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cream-100 rounded-full shadow-soft hidden md:block"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="inline-block font-medium text-sm uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
              Our Story
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              Crafting Joy Since 2010
            </h3>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Our journey began in a small kitchen with a simple ice cream maker and a passion for creating exceptional flavors. Today, we continue that same artisanal approach on a larger scale.
              </p>
              
              <p>
                Every batch of our ice cream is made with care, using traditional methods and the finest ingredients. We source our milk and cream from local farms that share our values of sustainability and animal welfare.
              </p>
              
              <p>
                Our fruit comes from orchards we've partnered with for years, and our nuts, chocolates, and other ingredients are selected for their exceptional quality and ethical sourcing.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-soft text-center">
                <h4 className="font-serif text-3xl font-medium text-primary mb-1">100%</h4>
                <p className="text-sm text-gray-600">Natural Ingredients</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-soft text-center">
                <h4 className="font-serif text-3xl font-medium text-primary mb-1">30+</h4>
                <p className="text-sm text-gray-600">Unique Flavors</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-soft text-center">
                <h4 className="font-serif text-3xl font-medium text-primary mb-1">5K+</h4>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
