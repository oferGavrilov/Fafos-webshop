import { Cart } from "../models/products.model"
import { loadFromStorage, saveToStorage } from "../utils/util.service"

const STORAGE_KEY = 'cart'
// eslint-disable-next-line import/prefer-default-export
export const cartService = {
      getCart,
      addToCart,
      removeFromCart,
      // updateCart,
      // clearCart
}

function getCart(): Cart[] | undefined {
      if(typeof window === 'undefined' || !window.localStorage) return []
      let cart = loadFromStorage(STORAGE_KEY)
      if (!cart || !cart.length) {
            cart = []
            saveToStorage('cart', cart)
      }
      return cart
}

function addToCart(product: Cart): void {
      const cart = loadFromStorage(STORAGE_KEY)
      const index = cart.findIndex((item: { id: string }) => item.id === product.id)
      if (index === -1) {
            cart.push({ ...product, quantity: 1 })
      } else {
            cart[index].quantity++
      }
      saveToStorage(STORAGE_KEY, cart)
}

function removeFromCart(id: string): void {
      const cart = loadFromStorage(STORAGE_KEY)
      const index = cart.findIndex((item: { id: string }) => item.id === id)
      if (index === -1) return
      cart.splice(index, 1)
      saveToStorage(STORAGE_KEY, cart)
}