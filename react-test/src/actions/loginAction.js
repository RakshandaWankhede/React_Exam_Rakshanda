
import {LOGIN_SAGA ,USER_DATA_STORE,LOGIN_FAILURE} from './actionTypes'

export const loginToSite =(data)=>{
    return {
        type : LOGIN_SAGA,
        data
    }
  }

  export const loginToSiteSuccess =(userData)=>{
    return {
        type : USER_DATA_STORE,
        payload : userData    
    }
  }

  export const loginToSiteError =()=>{
    return {
        type : LOGIN_FAILURE,

    }
  }