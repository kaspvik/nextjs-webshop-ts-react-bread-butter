"use client";

import { Alert, Snackbar, Typography } from "@mui/material";
import { Product } from "@prisma/client";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export interface CartItem extends Product {
  quantity: number;
}

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
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  // Uppdatera localStorage varje gång cartItems ändras (t.ex läggs till i cart, tas bort från cart etc)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
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

    // Sätt toast och visa
    showToast("The product has been added to the shopping cart!");
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevCart) =>
      // skapa en array utan id't
      prevCart.filter(
        (item) =>
          // behåll bara de items som INTE har det id som skickades in
          item.id !== id
      )
    );
  };

  const updateQuantity = (id: string, amount: number) => {
    setCartItems((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity !== 0); // Ta bort produkter som är exakt 0
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  //total items in cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    console.log("cartCount updated:", cartCount);
  }, [cartCount]); // Körs varje gång cartCount ändras

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
      }}>
      {props.children}
      {toastMessage && (
        <Snackbar
          open
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          sx={{
            width: "auto",
            maxWidth: "350px",
            borderRadius: "0.5rem",
            boxShadow: "none",
          }}>
          <Alert
            onClose={() => setToastMessage(null)}
            severity="success"
            variant="outlined"
            sx={{
              width: "100%",
              borderRadius: "0.5rem",
              borderColor: "success.main",
              color: "success.main",
              backgroundColor: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              padding: "6px 16px",
            }}>
            <Typography variant="h6">{toastMessage}</Typography>
          </Alert>
        </Snackbar>
      )}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
