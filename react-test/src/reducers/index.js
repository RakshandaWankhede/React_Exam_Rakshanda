import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import productSearchReducer from './productSearchReducer'
import productReducer from './productReducer'

export default combineReducers({
    loginReducer,
    productSearchReducer,
    productReducer
})