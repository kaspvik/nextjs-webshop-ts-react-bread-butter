"use client";

import { CartItem, Product } from "@/data";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ContextValues {
  cartItems: CartItem[];
  cartCount: number;
  totalPrice: number;

  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as ContextValues);

export default function CartProvider(props: PropsWithChildren) {
  // state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // functions
  const addToCart = (item: Product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];

        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        const newItem = {
          ...item,
          quantity: 1,
        };
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems([]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  //total items in cart
  const cartCount = 0;
  //total price
  const totalPrice = 0;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
