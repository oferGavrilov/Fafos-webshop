/* eslint-disable no-unsafe-optional-chaining */
import { toast } from 'react-toastify'
import { createContext, useContext, useMemo, useState } from 'react'
import { productService } from '@services/product.service'
import { cartService } from '../services/cart.service'
import { Cart } from '../models/products.model'

interface Props {
      children: React.ReactNode
}

type ShoppingCartContextType = {
      getItemQuantity: (id: string) => number
      increaseItemQuantity: (cartItem: Cart) => void
      decreaseItemQuantity: (id: string, size: string, color: string) => void
      removeItem: (id: string, size: string, color: string) => void | Cart[]
      clearCart: () => void
      cartItems: Cart[]
      cartQuantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export const useShoppingCart = () => useContext(ShoppingCartContext)
export function ShoppingCartProvider ({ children }: Props) {
      
      const [cartItems, setCartItems] = useState<Cart[]>(cartService.getCart())
      const cartQuantity = cartItems ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0

      function getItemQuantity (id: string) {
            const item = cartItems.find(item => item.id === id)
            return item ? item.quantity : 0
      }

      function increaseItemQuantity (cartItem: Cart): void {
            setCartItems(prevState => {
                  const item = cartItems.find(item => item.id === cartItem.id && item.size === cartItem.size && cartItem.color === item.color)
                  const isInStock = productService.isInStock(cartItem.id, cartItem.itemId, cartItem.size, (item?.quantity + 1 || 1))
                  
                  if (!isInStock) {
                        console.log('no stock')
                        toast.error('There`s no more stock of this item')
                        return [...prevState]
                  }
                  
                  if (item) {
                        item.quantity++
                        cartService.updateCart(item, 1)
                        toast.success('Item quantity increased')
                        return [...prevState]
                  }
                  
                  cartService.updateCart(cartItem)
                  toast.success('Item added to cart')
                  return [...cartItems, { ...cartItem, quantity: 1 }] as Cart[]
            })
      }

      function decreaseItemQuantity (id: string, size: string, color: string): void {
            setCartItems(prevState => {
                  const item = prevState.find(item => item.id === id && item.size === size && item.color === color)
                  if (item) {
                        if (item.quantity === 1) {
                              const state = removeItem(item.id, item.size, item.color)
                              item.quantity--
                              return [...state as Cart[]]
                        }
                        cartService.updateCart(item, -1)
                        item.quantity--
                        return [...prevState]
                  }
                  return [...prevState, { id, quantity: 1 }] as Cart[]
            })
      }

      function removeItem (id: string, size: string, color: string): void | Cart[] {
            let filteredItems
            setCartItems(prevState => {
                  filteredItems = prevState.filter(item => item.id !== id || item.size !== size || item.color !== color)
                  cartService.removeFromCart(filteredItems)
                  toast.success('Item removed from cart')
                  return [...filteredItems]
            })
            return filteredItems || cartItems
      }

      function clearCart (): void {
            setCartItems([])
            cartService.clearCart()
      }

      const contextValue = useMemo(() => ({
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeItem,
            clearCart,
            cartItems,
            cartQuantity
      }), [cartItems, setCartItems])

      return (
            <ShoppingCartContext.Provider value={contextValue} >
                  {children}
            </ShoppingCartContext.Provider>
      )
}