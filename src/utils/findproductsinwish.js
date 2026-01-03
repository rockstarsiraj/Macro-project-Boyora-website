export const findProductsInWish = (wish, id) => {
  return wish?.length > 0 && wish.some(product => product.id === id)
}
