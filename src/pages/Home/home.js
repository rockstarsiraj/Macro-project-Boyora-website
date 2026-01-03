import { Navbar, Productcard } from '../../components'
import { useEffect, useState } from 'react'
import { getAllProducts, getAllCategories } from '../../api'
import { useCart, useWish } from '../../context'

import { getProductsByCategories } from '../../utils/getProductsByCategories'

export const Home = () => {
  const [products, setproducts] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { cart } = useCart()
  console.log(cart)
  const { wish } = useWish()
  console.log(wish)
  useEffect(() => {
    ;(async () => {
      const products = await getAllProducts()
      const categories = await getAllCategories()
      const updatedCategories = [...categories, { id: '1a', name: 'ALL' }]
      setproducts(products)
      setCategories(updatedCategories)
    })()
  }, [])
  const onCategoryClick = category => {
    setSelectedCategory(category)
  }
  const filteredByCategories = getProductsByCategories(
    products,
    selectedCategory
  )
  return (
    <>
      <Navbar />
      <main className='  pt-8 '>
        <div className='flex gap-3 justify-center mb-3'>
          {categories?.length > 0 &&
            categories.map(category => (
              <div
                className='bg-green-400 font-bold rounded-full p-1 hover:cursor-pointer'
                onClick={() => onCategoryClick(category.name)}
              >
                {category.name}
              </div>
            ))}
        </div>
        <div className='flex  flex-wrap gap-8 justify-center pt-8 '>
          {filteredByCategories?.length > 0 ? (
            filteredByCategories.map(product => (
              <Productcard key={product.id} product={product} />
            ))
          ) : (
            <h2>
              <span class='material-symbols-outlined text-5xl'>category</span>
              <p className='text-2xl'>
                No Products Found.Please try with another category
              </p>
            </h2>
          )}
        </div>
      </main>
    </>
  )
}
