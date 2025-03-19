"use client";

import { CartItem, Product } from "@/data";
import { Alert, Snackbar, Typography } from "@mui/material";
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
    const cart = localStorage.getItem("cartItems");
    if (cart) {
      setCartItems(JSON.parse(cart));
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
    console.log("Adding item to cart:", item); // Debugging line

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
    showToast("Produkten har lagts till i kundvagnen!");

    // Försäkra dig om att toasten syns först innan cartCount uppdateras (lite delay om det behövs)
    setTimeout(() => {
      setToastMessage(null); // Ta bort toasten efter kort tid
    }, 2000);
  };

  useEffect(() => {
    if (toastMessage) {
      console.log("Toast message is shown:", toastMessage); // Debugging line

      const toastTimer = setTimeout(() => {
        setToastMessage(null);
      }, 2000);

      return () => clearTimeout(toastTimer);
    }
  }, [toastMessage]);

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
    // tar den befintliga cart och hämtar det senaste värdet för den
    setCartItems((prevCart) =>
      // mappar ut de cartItems (item) som ligger i cart
      prevCart.map((item) =>
        // kollar om något item i cart är samma som det vi skickade in
        item.id === id
          ? // uppdaterar quantity: lägger ut allt i item, tar quantity och plussar på amount. Math.max ser till att den inte kan bli mindre än 1.
            { ...item, quantity: Math.max(1, item.quantity + amount) }
          : // om inget id matchar behåller vi item som det var
            item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
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
      }}
    >
      {props.children}
      {toastMessage && (
        <Snackbar
          open
          autoHideDuration={2000}
          onClose={() => setToastMessage(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          sx={{
            width: "auto",
            maxWidth: "350px",
            borderRadius: "0.5rem",
            boxShadow: "none",
          }}
        >
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
            }}
            data-cy="added-to-cart-toast"
          >
            <Typography variant="body1">{toastMessage}</Typography>
          </Alert>
        </Snackbar>
      )}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
