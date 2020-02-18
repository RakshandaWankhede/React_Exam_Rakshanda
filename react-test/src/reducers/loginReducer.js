
import { USER_DATA_STORE } from '../actions/actionTypes'

const initialState ={
    userData : null
}
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
      case USER_DATA_STORE:
          localStorage.setItem("token",action.payload.data.access_token);
        return {
          ...state,
          userData : action.payload.data.access_token,
        };  
      default:
        return state;
    }
  }
