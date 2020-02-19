
import { USER_DATA_STORE ,LOGIN_FAILURE } from '../actions/actionTypes'

const initialState ={
    userData : null,
    error : null    
}
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
      case USER_DATA_STORE:
          localStorage.setItem("token",action.payload.data.access_token);
        return {
          ...state,
          userData : action.payload.data.access_token,
        };  
      case LOGIN_FAILURE:
        return {
          ...state,
          error : "Invalid Credential",
        };

      default:
        return state;
    }
  }
