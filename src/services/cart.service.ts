import { Cart, Product } from "../models/products.model"
import { loadFromStorage, saveToStorage } from "../utils/util.service"

const STORAGE_KEY = 'cart'
export const cartService = {
      getCart,
      addToCart,
      // removeFromCart,
      // updateCart,
      // clearCart
}

function getCart(): Cart[] {
      if(typeof window === 'undefined' || !window.localStorage) return
      let cart = loadFromStorage(STORAGE_KEY)
      if (!cart || !cart.length) {
            cart = []
            saveToStorage('cart', cart)
      }
      return cart
}

function addToCart(product: Product): void {
      const cart = loadFromStorage(STORAGE_KEY)
      const index = cart.findIndex((item: { id: string }) => item.id === product.id)
      if (index === -1) {
            cart.push({ ...product, quantity: 1 })
      } else {
            cart[index].quantity++
      }
      saveToStorage(STORAGE_KEY, cart)
}