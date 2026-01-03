export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD-TO-CART':
      return {
        ...state,
        cart: [...state.cart, payload.product]
      }
    case 'REMOVE-FROM-CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload)
      }

    default:
      return state
  }
}
