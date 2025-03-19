
import React, { useEffect } from 'react';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Cart: React.FC = () => {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    isCartOpen, 
    setIsCartOpen,
    totalItems,
    totalPrice
  } = useCart();

  // Close cart with escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setIsCartOpen]);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const handleCheckout = () => {
    toast.success('Order placed successfully!', {
      description: 'Thank you for your purchase.'
    });
    clearCart();
    setIsCartOpen(false);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm">
      <div 
        className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Cart header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Your Cart ({totalItems})
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Cart content */}
          <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                  <ShoppingCart className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add some delicious ice cream to get started!</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex items-start border-b border-gray-100 pb-4">
                    <div className="h-16 w-16 rounded-lg overflow-hidden bg-gray-100 mr-4 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.price.toFixed(2)} ₽</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-full">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded-full"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded-full"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 text-sm hover:underline"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Cart footer */}
          {items.length > 0 && (
            <div className="border-t p-4">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{totalPrice.toFixed(2)} ₽</span>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-md mb-2"
              >
                Checkout
              </button>
              
              <button
                onClick={clearCart}
                className="w-full border border-gray-200 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
