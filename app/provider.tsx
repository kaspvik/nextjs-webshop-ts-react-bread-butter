"use client";

import { CartItem } from "@/data";
import { createContext, PropsWithChildren, useState } from "react";

interface ContextValues {
  cartItems: CartItem[];
  cartCount: number;
  totalPrice: number;

  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as ContextValues);

export default function CartProvider(props: PropsWithChildren) {
  // state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // functions
  const addToCart = (item: CartItem) => {
    setCartItems([]);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems([]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // derived values
  const cartCount = 0;
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
