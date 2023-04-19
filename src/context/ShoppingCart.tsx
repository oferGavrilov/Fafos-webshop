import { createContext, useContext, useState } from 'react';

interface Props {
      children: React.ReactNode;
}

type CartItem = {
      id: string
      quantity: number
};

type ShoppingCartContext = {
      getItemQuantity: (id: string) => number
      increaseItemQuantity: (id: string) => void
      decreaseItemQuantity: (id: string) => void
      removeFromCart: (id: string) => void
      cartItems: CartItem[]
      cartQuantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
      return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: Props) {
      const [cartItems, setCartItems] = useState<CartItem[]>([])

      const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

      function getItemQuantity(id: string) {
            const item = cartItems.find(item => item.id === id);
            return item ? item.quantity : 0;
      }

      function increaseCartQuantity(id: string) {
            const item = cartItems.find(item => item.id === id);
            if (item) {
                  item.quantity++;
            } else {
                  cartItems.push({ id, quantity: 1 });
            }
            setCartItems([...cartItems]);
      }

      function decreaseCartQuantity(id: string) {
            const item = cartItems.find(item => item.id === id);
            if (item) {
                  item.quantity--;
            }
            setCartItems([...cartItems]);
      }

      function removeFromCart(id: string) {
            const item = cartItems.find(item => item.id === id);
            if (item) {
                  item.quantity = 0;
            }
            setCartItems([...cartItems]);
      }

      return (
            <ShoppingCartContext.Provider value={{ getItemQuantity, decreaseCartQuantity, increaseCartQuantity, removeFromCart, cartItems, cartQuantity } as any} >
                  {children}
            </ShoppingCartContext.Provider>
      );
}