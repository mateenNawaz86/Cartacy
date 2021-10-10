export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((cur) => cur.id !== action.payload.id),
      };

    case "SEARCH_BY_QUERY":
      return { ...state, searchQuery: action.payload };

    default:
      return state;
  }
};
