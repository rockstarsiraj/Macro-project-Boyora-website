import { Navbar, PriceDetails } from '../../components'
import { useCart } from '../../context/card.context'
import { HorizantalProductCard } from '../../components/HorizantalProductCard'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cart } = useCart()
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <main
        className='flex flex-col items-center pt-7 bg-gradient-to-r
from-[#dfe2fe]
via-[#b1cbfa]
to-[#8e98f5]'
      >
        {cart?.length > 0 ? (
          <>
            <h2 className=' text-3xl text-center text-black underline'>
              My Cart
            </h2>
            <div className='flex gap-8'>
              <div className='pt-4  flex flex-col gap-4'>
                {cart?.length > 0 ? (
                  cart.map(product => (
                    <HorizantalProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <>
                    <p className='text-2xl text-center text-black '>
                      <span className='material-symbols-outlined '>
                        shopping_cart_off
                      </span>
                      Cart is empty,Add product to Cart
                    </p>
                  </>
                )}
              </div>
              <div>
                <PriceDetails />
              </div>
            </div>
          </>
        ) : (
          <div>
            <>
              <h2 className='text-2xl text-center text-black '>
                <span className='material-symbols-outlined '>
                  shopping_cart_off
                </span>
                Cart is empty,Add product to Cart
              </h2>
            </>
            <p
              className='text-[] hover:cursor-pointer underline'
              onClick={() => navigate('/')}
            >
              Click to add items to Cart
            </p>
          </div>
        )}
      </main>
    </>
  )
}
