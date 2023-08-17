import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from '../Lib/Axios'
import { Navigate } from 'react-router-dom'
import { authSuccess } from './authSlice'


export const registerUser = createAsyncThunk('user/registerUser', async payloadData => {
    // call to the API/backend
    let response = await Axios.post('/users/registration', payloadData)
    return response.data

})


//login
export const loginUser = createAsyncThunk('user/login', async(userData, thunkAPI) => {
    try {
        console.log(userData)

        let response = await Axios.post('/users/login', userData)
        console.log(response.data)

        localStorage.setItem('jwtToken', response.data.token)
        thunkAPI.dispatch(authSuccess())
        return response.data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const updateUser = createAsyncThunk('user/updateUser', async(userData, thunkAPI) =>{
    console.log(userData)
    try{
        let response = await Axios.put(`/users/update-user/${userData.id}`,userData)
        console.log(response.data)
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data)
    }
})



export const deleteUser = createAsyncThunk('user/deleteUser', async(id, thunkAPI) =>{

    try{
        let response = await Axios.delete(`/users/delete-user/${id}`)
        console.log(response.data)
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data)
    }
})


export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        id: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber:'',
        streetAddress:'',
        unitApartment:'',
        city:'',
        state:'',
        zipcode:'',
        cart:{},
        orders:[]
    },
    //syncronous set state
    reducers: {
        setUser: (state, action) => {
            return {
                ...action.payload,
                password: ''
            }
        },
        setUserCart: (state, action) => {
            state.cart = action.payload;

        },
        resetUser: (state) => {
            return {
                id: '',
                email: '',
                password: '',
                firstname: '',
                lastname: '',
                phoneNumber:'',
                streetAddress:'',
                unitApartment:'',
                city:'',
                state:'',
                zipcode:'',
                cart:[],
                orders:[]
            }
        }
    },
    
    
})

 export const { setUser, setUserCart ,resetStatus, resetUser } = usersSlice.actions

export default usersSlice.reducer