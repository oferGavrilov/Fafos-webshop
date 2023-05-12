import { Cart } from '@models/products.model'
import { cartService } from '@services/cart.service'
import { productService } from '@services/product.service'
import { createContext, useContext, useMemo, useState } from 'react'

interface Props {
      children: React.ReactNode
}

type ShoppingCartContextType = {
      getItemQuantity: (id: string) => number
      increaseItemQuantity: (id: string) => void
      decreaseItemQuantity: (id: string) => void
      removeItem: (id: string) => void
      cartItems: Cart[]
      cartQuantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export const useShoppingCart = () => useContext(ShoppingCartContext)

export function ShoppingCartProvider({ children }: Props) {
      const [cartItems, setCartItems] = useState<Cart[]>([])

      const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)

      function getItemQuantity(id: string) {
            const item = cartItems.find(item => item.id === id)
            return item ? item.quantity : 0
      }

      function increaseItemQuantity(id: string): void {
            setCartItems(prevState => {
                  const item = cartItems.find(item => item.id === id)
                  if (item) {
                        item.quantity++
                        // cartService.addToCart(item)
                        return [...prevState]
                  } else {
                        const product = productService.getProductById(id)
                        return [...cartItems, { ...product, quantity: 1 }] as Cart[]
                  }
            })
      }

      function decreaseItemQuantity(id: string): void {
            setCartItems(prevState => {
                  const item = prevState.find(item => item.id === id)
                  if (item) {
                        if (item.quantity === 1) removeItem(id)
                        item.quantity--
                        return [...prevState]
                  }
                  return [...prevState, { id, quantity: 1 }] as Cart[]
            })
      }

      function removeItem(id: string): void {
            setCartItems(prevState => prevState.filter(item => item.id !== id))
      }

      const contextValue = useMemo(() => ({
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeItem,
            cartItems,
            cartQuantity
      }), [cartItems, setCartItems])

      return (
            <ShoppingCartContext.Provider value={contextValue} >
                  {children}
            </ShoppingCartContext.Provider>
      )
}