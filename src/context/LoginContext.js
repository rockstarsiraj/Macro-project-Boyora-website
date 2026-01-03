import { createContext, useContext, useReducer } from 'react'
import { loginReducer } from '../Reducers/loginreducer'
const LoginContext = createContext()

//provider
const LoginProvider = ({ children }) => {
  const initialState = {
    email: '',
    password: '',
    token: {
      access_token: localStorage.getItem('token') || '',
      refresh_token: ''
    }
  }

  const [{ email, password, token }, loginDispatch] = useReducer(
    loginReducer,
    initialState
  )
  return (
    <LoginContext.Provider value={{ email, password, token, loginDispatch }}>
      {children}
    </LoginContext.Provider>
  )
}
//consumer
const useLogin = () => useContext(LoginContext)
export { LoginProvider, useLogin }
