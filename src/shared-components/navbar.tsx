import React, { useEffect, useState } from 'react';
import CartService from '../services/cart-service';

const NavbarComponent = ({ cartCount }) => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const cartService = CartService();

  useEffect(() => {
    const fetchCartCount = async () => {
      const items = await cartService.getCart();
      if (items) {
        setCartItemCount(cartService.cartItemCount); // Update cart count based on fetched items
      }
    };

    fetchCartCount();
  }, [cartService]);

  
  return (
    <nav className="bg-gray-900 fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../../../../assets/images/product/logo.png" className="h-8 bg-white rounded-full" alt="Eshop Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white pr-4">Eshop</span>
        </a>
        <ul className="flex space-x-8 md:space-x-4">
          <li>
            <a href="/products" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer transition-transform transform hover:scale-105">Home</a>
          </li>
          <li>
            <a href="/cart" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer transition-transform transform hover:scale-105">
            <span>Cart Items: {cartItemCount}</span>
              Cart
              {cartCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  {cartCount}
                </span>
              )}
            </a>
          </li>
          <li>
            <a href="/profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer transition-transform transform hover:scale-105">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
