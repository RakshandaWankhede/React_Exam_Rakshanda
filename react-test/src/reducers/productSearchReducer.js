import { SEARCH_PRODUCTS_STORE } from '../actions/actionTypes'

const initialState ={
    products : null
}
export default function productSearchReducer(state = initialState, action) {
    
    switch (action.type) {
       
      case SEARCH_PRODUCTS_STORE:
        if(action.payload.data.response.totalRecords){
        return {
          ...state,
          products : action.payload.data.response.records,
        }}
        else
        {return state;}
      default:
        return state;
    }
  }
