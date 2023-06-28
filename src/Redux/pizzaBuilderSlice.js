import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'

const toppingSides = {
    left: false,
    whole: false,
    right: false
}

const toppingsGridObj = {
    ham: toppingSides,
    beef: toppingSides,
    salami: toppingSides,
    pepperoni: toppingSides,
    italianSausage: toppingSides,
    bacon: toppingSides,
    onions: toppingSides,
    mushrooms: toppingSides,
    blackOlives: toppingSides,
    greenPeppers: toppingSides,
    jalapenoPeppers: toppingSides,
    pineapple: toppingSides
}



const initialState ={
    id: uuidv4(),
    crust: 'Deep Dish',
    size: 'Sm',
    toppings:{},
    toppingsGrid: toppingsGridObj,
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
        handleHam:(state, action) => {
            // console.log(action.payload)


            if(action.payload === 'left side' && state.toppingsGrid.ham.left == true){
                state.toppingsGrid.ham.left = false
                state.toppingsGrid.ham.whole = false
                state.toppingsGrid.ham.right = false
                delete state.toppings.ham

            }
            else if(action.payload === 'left side'){
                state.toppingsGrid.ham.left = true
                state.toppingsGrid.ham.whole = false
                state.toppingsGrid.ham.right = false
                state.toppings.ham = action.payload
            }


            if(action.payload === 'whole pizza' && state.toppingsGrid.ham.whole == true){
                state.toppingsGrid.ham.left = false
                state.toppingsGrid.ham.whole = false
                state.toppingsGrid.ham.right = false
                delete state.toppings.ham

            }
            else if(action.payload === 'whole pizza'){
                state.toppingsGrid.ham.left = false
                state.toppingsGrid.ham.whole = true
                state.toppingsGrid.ham.right = false
                state.toppings.ham = action.payload

            }



            if(action.payload === 'right side'  && state.toppingsGrid.ham.right == true){
                state.toppingsGrid.ham.left = false
                state.toppingsGrid.ham.whole = false
                state.toppingsGrid.ham.right = false
                delete state.toppings.ham

            }
            else if(action.payload === 'right side'){
                state.toppingsGrid.ham.left = false
                state.toppingsGrid.ham.whole = false
                state.toppingsGrid.ham.right = true
                state.toppings.ham = action.payload

            }



        },
        removeTopping: (state, action) => {

        },
        updatePrice: (state, action) => {

        }

    },
});


export const { selectCrust, selectSize, handleHam } = pizzaBuilderSlice.actions;
export default pizzaBuilderSlice.reducer;