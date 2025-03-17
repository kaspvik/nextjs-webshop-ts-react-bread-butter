"use client";

import { CartItem, Product } from "@/data";
import { Snackbar } from "@mui/material";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextValues {
  cartItems: CartItem[];
  cartCount: number;
  totalSum: number;
  //for the numberfield component
  updateQuantity: (id: string, amount: number) => void;
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  showToast: (message: string) => void;
}

const CartContext = createContext({} as ContextValues);

export default function CartProvider(props: PropsWithChildren) {
  // state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null); // Snackbar state

  // läser in cartItems från LocalStorage vid varje omladdning av sidan
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Uppdatera localStorage varje gång cartItems ändras (t.ex läggs till i cart, tas bort från cart etc)
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  // methods
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
    showToast("Produkten har lagts i kundvagnen!");
  };

  const removeFromCart = (itemId: string) => {
    setCartItems([]);
  };

  const updateQuantity = (id: string, amount: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  //total items in cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  //total price
  const totalSum = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        totalSum,
        updateQuantity,
        addToCart,
        removeFromCart,
        clearCart,
        showToast,
      }}
    >
      {props.children}

      <Snackbar
        open={!!toastMessage}
        autoHideDuration={2000}
        onClose={() => setToastMessage(null)}
        message={toastMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      />
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
