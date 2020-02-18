import { PRODUCT_STORE } from '../actions/actionTypes'

const initialState ={
    product : null
}
export default function productReducer(state = initialState, action) {
    
    switch (action.type) {
       
      case PRODUCT_STORE:
        return {
          ...state,
          product : action.payload.data,
        }
      default:
        return state;
    }
  }