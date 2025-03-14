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
      ); //kollar om item redan finns i arrayen

      //findIdex returnerar -1 om den inte hittar det den letar efter, så om existingItemIndex inte är -1 så finns den i arrayen.
      if (existingItemIndex !== -1) {
        //updatedItems är en kopia av hela den gamla arrayen
        const updatedItems = [...prevItems];
        //tar ut item från den specifika indexplatsen, tar ut quantity från den och lägger till ett
        //det andra värdet i måsvingarna skriver över det första. Så "quantity: skriver över quantity i ...updatedItems[existingItemIndex]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
        //annars tar den hela item, sätter quantity till ett och lägger till den till den gamla arrayen
      } else {
        const newItem = {
          ...item,
          quantity: 1,
        }; //lägg till newItem til prevItems
        return [...prevItems, newItem];
      }
    });
    console.log(...cartItems);
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

export const useCart = () => useContext(CartContext);
