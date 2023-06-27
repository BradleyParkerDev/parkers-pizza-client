import {configureStore} from '@reduxjs/toolkit'
//import reducers/slice here
import usersReducer from './usersSlice'
import authReducer from './authSlice'
import pizzaBuilderReducer from './pizzaBuilderSlice'

export default configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer,
        pizza: pizzaBuilderReducer
    }
})