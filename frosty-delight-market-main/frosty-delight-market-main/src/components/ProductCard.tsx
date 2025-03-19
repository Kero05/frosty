
import React from 'react';
import { Plus } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addItem } = useCart();
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white border border-gray-100 h-full transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1",
        index === 0 && "lg:col-span-2 lg:row-span-2"
      )}
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-serif text-lg font-medium">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="font-medium">{product.price.toFixed(2)} ₽</span>
          
          <button
            onClick={() => addItem(product)}
            className="flex items-center justify-center rounded-full bg-primary/10 text-primary p-2 transition-colors hover:bg-primary hover:text-white"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
