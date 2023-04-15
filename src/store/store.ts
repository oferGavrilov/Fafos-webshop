import { createContext, useReducer } from "react"
export const Store = createContext()
const initialState = {
      cart: { cartItems: [] }
}

function reducer(state = initialState, action: { type: string, payload: any }) {
      switch (action.type) {
            case 'CART_ADD_ITEM': {
                  const newItem = action.payload
                  const existItem: any = state.cart.cartItems.find((item: { id: string }) => item.id === newItem.id)
                  const cartItems = existItem ? state.cart.cartItems.map((item: { title: string }) => item.title === existItem.title ? newItem : item)
                        : [...state.cart.cartItems, newItem]
                  return { ...state, cart: { ...state.cart, cartItems } }
            }
            default: return state
      }
}

interface Props {
      children: React.ReactNode
}

export function StoreProvider({ children }: Props) {
      const [state, dispatch] = useReducer(reducer, initialState)
      const value = { state, dispatch }
      return <Store.Provider value={ value }> { children } < /Store.Provider>
}