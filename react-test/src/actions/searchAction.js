import {SEARCH_PRODUCTS_SAGA,SEARCH_PRODUCTS_STORE} from './actionTypes'

export const searchProducts =(data)=>{
    return {
        type : SEARCH_PRODUCTS_SAGA,
        data
    }
  }

export const storeProductsInfo =(productsData)=>{
    return {
        type : SEARCH_PRODUCTS_STORE,
        payload : productsData    
    }
}