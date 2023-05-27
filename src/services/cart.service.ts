import { Cart } from "../models/products.model"
import { loadFromStorage, saveToStorage } from "../utils/util.service"
import { productService } from "./product.service"

const STORAGE_KEY = 'cart'
export const cartService = {
      getCart,
      updateCart,
      removeFromCart,
      clearCart
}

function getCart (): Cart[] | undefined {
      if (typeof window === 'undefined' || !window.localStorage) return []
      let cart = loadFromStorage(STORAGE_KEY)
      if (!cart || !cart.length) {
            cart = []
            saveToStorage('cart', cart)
      }
      return cart
}

function updateCart (product: Cart, operator = 0): void {
      const cart = loadFromStorage(STORAGE_KEY)
      const index = cart.findIndex((item: { id: string, size: string , color:string}) => 
      item.id === product.id && item.size === product.size && item.color === product.color)
      
      if (index === -1) {
            cart.push({ ...product, quantity: 1 })
      } else {
            if (operator === -1 ) {
                  if(cart[index].quantity === 1) {
                        cart.splice(index, 1)
                        saveToStorage(STORAGE_KEY, cart)
                        return
                  }
                  cart.splice(index, 1)
                  saveToStorage(STORAGE_KEY, cart)
                  return
            }
            if(productService.isInStock(product.id, product.itemId, product.size, cart[index].quantity + operator)) {
                  cart[index].quantity++
            }
      }
      saveToStorage(STORAGE_KEY, cart)
}

function removeFromCart (newCart: Cart[]): void {
      saveToStorage(STORAGE_KEY, newCart)
}

function clearCart (): void {
      saveToStorage(STORAGE_KEY, [])
}