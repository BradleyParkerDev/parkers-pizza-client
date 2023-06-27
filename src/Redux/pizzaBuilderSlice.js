import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'

const initialState ={
    id: uuidv4(),
    crust: 'Deep Dish',
    size: 'Sm',
    toppings:[],
    specialInstructions: '',
    price: 0
}


const pizzaBuilderSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        selectCrust:(state, action) =>{
            console.log(action.payload)
            state.crust = action.payload
            console.log(state.size)
            console.log(state.id)
            return state;
        },
        selectSize:(state, action) =>{
            console.log(action.payload)
            state.size = action.payload
            console.log(state.size)
            return state;
        },
        addTopping:(state, action) => {
            state.toppings.push(action.payload)

        },
        removeTopping: (state, action) => {

        },
        updatePrice: (state, action) => {

        }

    },
});


export const { selectCrust, selectSize } = pizzaBuilderSlice.actions;
export default pizzaBuilderSlice.reducer;