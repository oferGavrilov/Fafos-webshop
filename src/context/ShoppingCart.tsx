import { Cart } from '@models/products.model'
import { cartService } from '@services/cart.service'
import { productService } from '@services/product.service'
import { createContext, useContext, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

interface Props {
      children: React.ReactNode
}

type ShoppingCartContextType = {
      getItemQuantity: (id: string) => number
      increaseItemQuantity: (cartItem: Cart) => void
      decreaseItemQuantity: (id: string) => void
      removeItem: (id: string) => void
      cartItems: Cart[]
      cartQuantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export const useShoppingCart = () => useContext(ShoppingCartContext)

export function ShoppingCartProvider({ children }: Props) {
      const [cartItems, setCartItems] = useState<Cart[]>(cartService.getCart())

      const cartQuantity = cartItems ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0

      function getItemQuantity(id: string) {
            const item = cartItems.find(item => item.id === id)
            return item ? item.quantity : 0
      }

      function increaseItemQuantity(cartItem: Cart): void {
            setCartItems(prevState => {
                  const item = cartItems.find(item => item.id === cartItem.id)
                  if (item) {
                        item.quantity++
                        cartService.addToCart(item)
                        return [...prevState]
                  } else {
                        cartService.addToCart(cartItem)
                        // const product = productService.getProductById(id)
                        return [...cartItems, { ...cartItem, quantity: 1 }] as Cart[]
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

      async function removeItem(id: string): Promise<void> {
            setCartItems(prevState => prevState.filter(item => item.id !== id))
            await cartService.removeFromCart(id)
            toast.success('Item removed from cart')
      }

      const contextValue = useMemo(() => ({
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeItem,
            cartItems,
            cartQuantity
      }), [cartItems])

      return (
            <ShoppingCartContext.Provider value={contextValue} >
                  {children}
            </ShoppingCartContext.Provider>
      )
}