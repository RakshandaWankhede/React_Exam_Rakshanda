import {PRODUCT_SAGA ,PRODUCT_STORE} from './actionTypes'

export const getProduct =(data)=>{
    return {
        type : PRODUCT_SAGA,
        data
    }
  }

export const storeProductInfo =(productData)=>{
    return {
        type : PRODUCT_STORE,
        payload : productData    
    }
}