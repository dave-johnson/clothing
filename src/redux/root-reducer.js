import {combineReducers} from 'redux'

import userReducer from './user/user.reducer'
import cartReduct from './cart/cart.reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReduct
})