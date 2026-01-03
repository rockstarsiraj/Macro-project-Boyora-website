import { createContext, useContext, useReducer } from 'react'
import { Wishreducer } from '../Reducers/wishlistreducer'
const wishContext = createContext()
//provider
const WishProvider = ({ children }) => {
  const initialState = {
    wish: JSON.parse(localStorage.getItem('wish')) || []
  }
  const [{ wish }, wishDispatch] = useReducer(Wishreducer, initialState)

  return (
    <wishContext.Provider value={{ wish, wishDispatch }}>
      {children}
    </wishContext.Provider>
  )
}
//consumer
const useWish = () => useContext(wishContext)
export { WishProvider, useWish }
