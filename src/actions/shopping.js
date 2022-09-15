import { types } from "../type/types"

export const addProductToCart = (state, value) =>{
  localStorage.setItem('cart', JSON.stringify(state.cart + value));
  return {
    type: types.Add,
    payload: value
  }
}
