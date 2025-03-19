
import React from 'react';
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif font-semibold tracking-tight mb-4">
              Délice<span className="text-primary">.</span>
            </h2>
            <p className="text-gray-600 max-w-md mb-6">
              Premium handcrafted ice cream made with love and the finest ingredients. 
              Each scoop is a celebration of flavor and tradition.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-white rounded-full shadow-soft hover:bg-gray-50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white rounded-full shadow-soft hover:bg-gray-50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white rounded-full shadow-soft hover:bg-gray-50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#products" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Opening Hours</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2023 Délice Ice Cream. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Made with </span>
            <Heart className="h-4 w-4 mx-1 text-primary" />
            <span>in our artisanal kitchen</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
