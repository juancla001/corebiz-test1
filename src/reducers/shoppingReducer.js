import { types } from '../type/types'

export const initialState = {
  cart: 0,
}

export const shoppingReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.Add:
      return {
        ...state,
        cart: state.cart + action.payload
      }

    default:
      return state;
  }

}