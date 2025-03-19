import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/context/CartContext';

const products: Product[] = [
  {
    id: 1,
    name: "Vanilla Bean Dream",
    price: 399,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    description: "Pure Madagascar vanilla beans infused in our premium cream base. A timeless classic with depth of flavor.",
    category: "Classic"
  },
  {
    id: 2,
    name: "Strawberry Fields",
    price: 449,
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description: "Fresh-picked strawberries blended into a creamy base. Perfectly balanced sweetness with natural fruit flavor.",
    category: "Fruit"
  },
  {
    id: 3,
    name: "Chocolate Decadence",
    price: 499,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    description: "Rich Belgian chocolate creates an intensely satisfying experience. Smooth, dark, and utterly indulgent.",
    category: "Classic"
  },
  {
    id: 4,
    name: "Pistachio Paradise",
    price: 549,
    image: "https://images.unsplash.com/photo-1588685232034-8934ff98c49d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description: "Roasted pistachios folded into a lightly sweetened base. A sophisticated flavor with subtle nuttiness.",
    category: "Nuts"
  },
  {
    id: 5,
    name: "Mint Chocolate Chip",
    price: 499,
    image: "https://images.unsplash.com/photo-1602296750425-f025b045f5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description: "Refreshing mint ice cream studded with premium chocolate chips. The perfect after-dinner treat.",
    category: "Classic"
  },
  {
    id: 6,
    name: "Salted Caramel",
    price: 599,
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description: "Buttery caramel swirled through vanilla ice cream with a hint of sea salt. Sweet and savory perfection.",
    category: "Special"
  }
];

const Products: React.FC = () => {
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
    <section id="products" ref={sectionRef} className="py-20 section-animated" style={{ transitionDelay: '100ms' }}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="inline-block font-medium text-sm uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
            Our Selection
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Handcrafted Flavors
          </h3>
          <p className="text-gray-600 max-w-2xl">
            Each flavor is carefully developed by our artisan ice cream makers, using only the finest ingredients from trusted local suppliers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
