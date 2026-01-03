import { createContext, useContext, useReducer } from 'react'
import { cartReducer } from '../Reducers/reducer'
const cartContext = createContext()

//provider
const CartProvider = ({ children }) => {
  console.log(JSON.parse(localStorage.getItem('cart')))
  const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || []
  }

  const [{ cart }, cartDispatch] = useReducer(cartReducer, initialState)
  return (
    <cartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </cartContext.Provider>
  )
}
//consumer
const useCart = () => useContext(cartContext)
export { CartProvider, useCart }
