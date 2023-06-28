import {configureStore} from '@reduxjs/toolkit'
//import reducers/slice here
import usersReducer from './usersSlice'
import authReducer from './authSlice'
import pizzaBuilderReducer from './pizzaBuilderSlice'
import cartReducer from './cartSlice'

export default configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer,
        pizza: pizzaBuilderReducer,
        cart: cartReducer
    }
})