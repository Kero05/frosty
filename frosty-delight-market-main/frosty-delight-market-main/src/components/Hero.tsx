
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 flex items-center">
      {/* Background circles/shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full bg-cream-100 opacity-70 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-pink-50 opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="inline-block font-medium text-sm uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full mb-6 animate-fade-in">
                Handcrafted Ice Cream
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-tight animate-fade-in-delay-1">
                Artisanal Flavors for Every Moment
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl animate-fade-in-delay-2">
                Delight in our premium ice cream made from locally-sourced ingredients. 
                Each scoop is crafted with care to create an extraordinary dessert experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <button
                onClick={scrollToProducts}
                className="bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
              >
                Explore Flavors
              </button>
              <a 
                href="#about" 
                className="px-8 py-3 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors text-center"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-[36rem] overflow-hidden rounded-2xl">
              <div className={cn(
                "w-full h-full bg-cover bg-center rounded-2xl shadow-soft",
                "animate-fade-in-delay-2"
              )}
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')" }}
              >
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-lg shadow-soft rotate-12 hidden md:block animate-fade-in-delay-3"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cream-100 rounded-full shadow-soft hidden md:block animate-float"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-subtle">
          <span className="text-sm font-medium mb-2">Scroll to discover</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
