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
    totalCost: 0
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


            if(action.payload.side === 'left side' && state.toppingsGrid.ham.left == true){
                state.toppingsGrid.ham.left = false
                state.toppingsGrid.ham.whole = false
                state.toppingsGrid.ham.right = false
                delete state.toppings.ham

            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.ham.left = true
                state.toppingsGrid.ham.whole = false
                state.toppingsGrid.ham.right = false
                state.toppings.ham = action.payload

            }


            if(action.payload.side === 'whole pizza' && state.toppingsGrid.ham.whole == true){
                state.toppingsGrid.ham.left = false
                state.toppingsGrid.ham.whole = false
                state.toppingsGrid.ham.right = false
                delete state.toppings.ham

            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.ham.left = false
                state.toppingsGrid.ham.whole = true
                state.toppingsGrid.ham.right = false
                state.toppings.ham = action.payload

            }



            if(action.payload.side === 'right side'  && state.toppingsGrid.ham.right == true){
                state.toppingsGrid.ham.left = false
                state.toppingsGrid.ham.whole = false
                state.toppingsGrid.ham.right = false
                delete state.toppings.ham

            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.ham.left = false
                state.toppingsGrid.ham.whole = false
                state.toppingsGrid.ham.right = true
                state.toppings.ham = action.payload

            }



        },
        handleBeef:(state, action) => {
            // console.log(action.payload)
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.beef.left == true){
                state.toppingsGrid.beef.left = false
                state.toppingsGrid.beef.whole = false
                state.toppingsGrid.beef.right = false
                delete state.toppings.beef
        
            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.beef.left = true
                state.toppingsGrid.beef.whole = false
                state.toppingsGrid.beef.right = false
                state.toppings.beef = action.payload
            }
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.beef.whole == true){
                state.toppingsGrid.beef.left = false
                state.toppingsGrid.beef.whole = false
                state.toppingsGrid.beef.right = false
                delete state.toppings.beef
        
            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.beef.left = false
                state.toppingsGrid.beef.whole = true
                state.toppingsGrid.beef.right = false
                state.toppings.beef = action.payload
        
            }
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.beef.right == true){
                state.toppingsGrid.beef.left = false
                state.toppingsGrid.beef.whole = false
                state.toppingsGrid.beef.right = false
                delete state.toppings.beef
        
            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.beef.left = false
                state.toppingsGrid.beef.whole = false
                state.toppingsGrid.beef.right = true
                state.toppings.beef = action.payload
        
            }

        },
        updatePrice: (state, action) => {

        }

    },
});


export const { selectCrust, selectSize, handleHam, handleBeef } = pizzaBuilderSlice.actions;
export default pizzaBuilderSlice.reducer;


