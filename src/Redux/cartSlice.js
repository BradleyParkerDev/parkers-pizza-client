import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'

const initialState = {
    items: [],
    total: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItemToCart: (state, action) => {
            console.log(action)
            let newItem = {
                item: action.payload,
                quantity: 1                
            }

            state.items.push(newItem)

        },
        updateQuantity:(state, action) =>{
            
            let itemToUpdate = action.payload;
            if(action.type === 'increase'){
                itemToUpdate.quantity+=1
            }else if(action.type === 'decrease'){
                itemToUpdate.quantity-=1
            }
        },
        checkOut:(state, action) =>{

        }  
    }
})

export const {addItemToCart} = cartSlice.actions;
export default cartSlice.reducer;