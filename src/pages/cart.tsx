import { useShoppingCart } from '@context/ShoppingCart'
import React from 'react'
import Layout from 'src/components/Layout'

function Cart() {
  const { cartItems } = useShoppingCart()
  console.log(cartItems)
  return (
      <div>cart</div>
  )
}

export default Cart