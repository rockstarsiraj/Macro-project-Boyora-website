import { Routes, Route } from 'react-router-dom'
import { Home, Cart, Wish, AuthLogin } from './pages'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wish' element={<Wish />} />
        <Route path='/auth/login' element={<AuthLogin />} />
      </Routes>
    </>
  )
}

export default App
