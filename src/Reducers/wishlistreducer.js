export const Wishreducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD-TO-WISH':
      return {
        ...state,
        wish: [...state.wish, payload.product]
      }
    case 'REMOVE-FROM-WISH':
      return {
        ...state,
        wish: state.wish.filter(item => item.id !== payload)
      }
    default:
      return state
  }
}
