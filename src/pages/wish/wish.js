import { Navbar, HorizantalProductWish } from '../../components'
import { useWish } from '../../context/wishcontext'
import { useNavigate } from 'react-router-dom'

export const Wish = () => {
  const { wish } = useWish()
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <main
        className='flex flex-col items-center pt-7 bg-gradient-to-b
from-[#8d8daa]
via-[#dfdfde]
to-[#f7f5f2]'
      >
        <h2 className=' text-3xl text-center text-black underline decoration-slate-700'>
          My Wishlist
        </h2>
        <div className='pt-4 flex flex-col gap-4'>
          {wish?.length > 0 ? (
            wish.map(product => (
              <HorizantalProductWish key={product.id} product={product} />
            ))
          ) : (
            <>
              <p className='text-2xl text-center text-black '>
                <span class='material-symbols-outlined'>heart_minus</span>
                Wishlist is empty,Add product to Wishlist
              </p>
              <p
                className='text-[] hover:cursor-pointer underline'
                onClick={() => navigate('/')}
              >
                Click to add items to WishList
              </p>
            </>
          )}
        </div>
      </main>
    </>
  )
}
