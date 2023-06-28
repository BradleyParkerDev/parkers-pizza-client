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

        handleSalami:(state, action) => {
            // console.log(action.payload)
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.salami.left == true){
                state.toppingsGrid.salami.left = false
                state.toppingsGrid.salami.whole = false
                state.toppingsGrid.salami.right = false
                delete state.toppings.salami
        
            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.salami.left = true
                state.toppingsGrid.salami.whole = false
                state.toppingsGrid.salami.right = false
                state.toppings.salami = action.payload
            }
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.salami.whole == true){
                state.toppingsGrid.salami.left = false
                state.toppingsGrid.salami.whole = false
                state.toppingsGrid.salami.right = false
                delete state.toppings.salami
        
            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.salami.left = false
                state.toppingsGrid.salami.whole = true
                state.toppingsGrid.salami.right = false
                state.toppings.salami = action.payload
        
            }
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.salami.right == true){
                state.toppingsGrid.salami.left = false
                state.toppingsGrid.salami.whole = false
                state.toppingsGrid.salami.right = false
                delete state.toppings.salami
        
            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.salami.left = false
                state.toppingsGrid.salami.whole = false
                state.toppingsGrid.salami.right = true
                state.toppings.salami = action.payload
        
            }
        
        },
        handlePepperoni:(state, action) => {
            // console.log(action.payload)
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.pepperoni.left == true){
                state.toppingsGrid.pepperoni.left = false
                state.toppingsGrid.pepperoni.whole = false
                state.toppingsGrid.pepperoni.right = false
                delete state.toppings.pepperoni
        
            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.pepperoni.left = true
                state.toppingsGrid.pepperoni.whole = false
                state.toppingsGrid.pepperoni.right = false
                state.toppings.pepperoni = action.payload
            }
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.pepperoni.whole == true){
                state.toppingsGrid.pepperoni.left = false
                state.toppingsGrid.pepperoni.whole = false
                state.toppingsGrid.pepperoni.right = false
                delete state.toppings.pepperoni
        
            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.pepperoni.left = false
                state.toppingsGrid.pepperoni.whole = true
                state.toppingsGrid.pepperoni.right = false
                state.toppings.pepperoni = action.payload
        
            }
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.pepperoni.right == true){
                state.toppingsGrid.pepperoni.left = false
                state.toppingsGrid.pepperoni.whole = false
                state.toppingsGrid.pepperoni.right = false
                delete state.toppings.pepperoni
        
            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.pepperoni.left = false
                state.toppingsGrid.pepperoni.whole = false
                state.toppingsGrid.pepperoni.right = true
                state.toppings.pepperoni = action.payload
        
            }
        
        },
        handleItalianSausage:(state, action) => {
            // console.log(action.payload)
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.italianSausage.left == true){
                state.toppingsGrid.italianSausage.left = false
                state.toppingsGrid.italianSausage.whole = false
                state.toppingsGrid.italianSausage.right = false
                delete state.toppings.italianSausage
        
            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.italianSausage.left = true
                state.toppingsGrid.italianSausage.whole = false
                state.toppingsGrid.italianSausage.right = false
                state.toppings.italianSausage = action.payload
            }
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.italianSausage.whole == true){
                state.toppingsGrid.italianSausage.left = false
                state.toppingsGrid.italianSausage.whole = false
                state.toppingsGrid.italianSausage.right = false
                delete state.toppings.italianSausage
        
            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.italianSausage.left = false
                state.toppingsGrid.italianSausage.whole = true
                state.toppingsGrid.italianSausage.right = false
                state.toppings.italianSausage = action.payload
        
            }
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.italianSausage.right == true){
                state.toppingsGrid.italianSausage.left = false
                state.toppingsGrid.italianSausage.whole = false
                state.toppingsGrid.italianSausage.right = false
                delete state.toppings.italianSausage
        
            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.italianSausage.left = false
                state.toppingsGrid.italianSausage.whole = false
                state.toppingsGrid.italianSausage.right = true
                state.toppings.italianSausage = action.payload
        
            }
        
        },
        handleBacon:(state, action) => {
            // console.log(action.payload)
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.bacon.left == true){
                state.toppingsGrid.bacon.left = false
                state.toppingsGrid.bacon.whole = false
                state.toppingsGrid.bacon.right = false
                delete state.toppings.bacon
        
            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.bacon.left = true
                state.toppingsGrid.bacon.whole = false
                state.toppingsGrid.bacon.right = false
                state.toppings.bacon = action.payload
            }
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.bacon.whole == true){
                state.toppingsGrid.bacon.left = false
                state.toppingsGrid.bacon.whole = false
                state.toppingsGrid.bacon.right = false
                delete state.toppings.bacon
        
            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.bacon.left = false
                state.toppingsGrid.bacon.whole = true
                state.toppingsGrid.bacon.right = false
                state.toppings.bacon = action.payload
        
            }
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.bacon.right == true){
                state.toppingsGrid.bacon.left = false
                state.toppingsGrid.bacon.whole = false
                state.toppingsGrid.bacon.right = false
                delete state.toppings.bacon
        
            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.bacon.left = false
                state.toppingsGrid.bacon.whole = false
                state.toppingsGrid.bacon.right = true
                state.toppings.bacon = action.payload
        
            }
        
        },
        handleOnions:(state, action) => {
            // console.log(action.payload)
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.onions.left == true){
                state.toppingsGrid.onions.left = false
                state.toppingsGrid.onions.whole = false
                state.toppingsGrid.onions.right = false
                delete state.toppings.onions
        
            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.onions.left = true
                state.toppingsGrid.onions.whole = false
                state.toppingsGrid.onions.right = false
                state.toppings.onions = action.payload
        
            }
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.onions.whole == true){
                state.toppingsGrid.onions.left = false
                state.toppingsGrid.onions.whole = false
                state.toppingsGrid.onions.right = false
                delete state.toppings.onions
        
            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.onions.left = false
                state.toppingsGrid.onions.whole = true
                state.toppingsGrid.onions.right = false
                state.toppings.onions = action.payload
        
            }
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.onions.right == true){
                state.toppingsGrid.onions.left = false
                state.toppingsGrid.onions.whole = false
                state.toppingsGrid.onions.right = false
                delete state.toppings.onions
        
            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.onions.left = false
                state.toppingsGrid.onions.whole = false
                state.toppingsGrid.onions.right = true
                state.toppings.onions = action.payload
        
            }
        
        
        
        },
        handleMushrooms:(state, action) => {
            // console.log(action.payload)
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.mushrooms.left == true){
                state.toppingsGrid.mushrooms.left = false
                state.toppingsGrid.mushrooms.whole = false
                state.toppingsGrid.mushrooms.right = false
                delete state.toppings.mushrooms
        
            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.mushrooms.left = true
                state.toppingsGrid.mushrooms.whole = false
                state.toppingsGrid.mushrooms.right = false
                state.toppings.mushrooms = action.payload
            }
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.mushrooms.whole == true){
                state.toppingsGrid.mushrooms.left = false
                state.toppingsGrid.mushrooms.whole = false
                state.toppingsGrid.mushrooms.right = false
                delete state.toppings.mushrooms
        
            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.mushrooms.left = false
                state.toppingsGrid.mushrooms.whole = true
                state.toppingsGrid.mushrooms.right = false
                state.toppings.mushrooms = action.payload
        
            }
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.mushrooms.right == true){
                state.toppingsGrid.mushrooms.left = false
                state.toppingsGrid.mushrooms.whole = false
                state.toppingsGrid.mushrooms.right = false
                delete state.toppings.mushrooms
        
            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.mushrooms.left = false
                state.toppingsGrid.mushrooms.whole = false
                state.toppingsGrid.mushrooms.right = true
                state.toppings.mushrooms = action.payload
        
            }
        
        },
        
        handleBlackOlives:(state, action) => {
            // console.log(action.payload)
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.blackOlives.left == true){
                state.toppingsGrid.blackOlives.left = false
                state.toppingsGrid.blackOlives.whole = false
                state.toppingsGrid.blackOlives.right = false
                delete state.toppings.blackOlives
        
            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.blackOlives.left = true
                state.toppingsGrid.blackOlives.whole = false
                state.toppingsGrid.blackOlives.right = false
                state.toppings.blackOlives = action.payload
            }
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.blackOlives.whole == true){
                state.toppingsGrid.blackOlives.left = false
                state.toppingsGrid.blackOlives.whole = false
                state.toppingsGrid.blackOlives.right = false
                delete state.toppings.blackOlives
        
            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.blackOlives.left = false
                state.toppingsGrid.blackOlives.whole = true
                state.toppingsGrid.blackOlives.right = false
                state.toppings.blackOlives = action.payload
        
            }
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.blackOlives.right == true){
                state.toppingsGrid.blackOlives.left = false
                state.toppingsGrid.blackOlives.whole = false
                state.toppingsGrid.blackOlives.right = false
                delete state.toppings.blackOlives
        
            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.blackOlives.left = false
                state.toppingsGrid.blackOlives.whole = false
                state.toppingsGrid.blackOlives.right = true
                state.toppings.blackOlives = action.payload
        
            }
        
        },
        handleGreenPeppers:(state, action) => {
            // console.log(action.payload)
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.greenPeppers.left == true){
                state.toppingsGrid.greenPeppers.left = false
                state.toppingsGrid.greenPeppers.whole = false
                state.toppingsGrid.greenPeppers.right = false
                delete state.toppings.greenPeppers
        
            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.greenPeppers.left = true
                state.toppingsGrid.greenPeppers.whole = false
                state.toppingsGrid.greenPeppers.right = false
                state.toppings.greenPeppers = action.payload
            }
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.greenPeppers.whole == true){
                state.toppingsGrid.greenPeppers.left = false
                state.toppingsGrid.greenPeppers.whole = false
                state.toppingsGrid.greenPeppers.right = false
                delete state.toppings.greenPeppers
        
            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.greenPeppers.left = false
                state.toppingsGrid.greenPeppers.whole = true
                state.toppingsGrid.greenPeppers.right = false
                state.toppings.greenPeppers = action.payload
        
            }
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.greenPeppers.right == true){
                state.toppingsGrid.greenPeppers.left = false
                state.toppingsGrid.greenPeppers.whole = false
                state.toppingsGrid.greenPeppers.right = false
                delete state.toppings.greenPeppers
        
            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.greenPeppers.left = false
                state.toppingsGrid.greenPeppers.whole = false
                state.toppingsGrid.greenPeppers.right = true
                state.toppings.greenPeppers = action.payload
        
            }
        
        },
        handleJalapenoPeppers:(state, action) => {
            // console.log(action.payload)
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.jalapenoPeppers.left == true){
                state.toppingsGrid.jalapenoPeppers.left = false
                state.toppingsGrid.jalapenoPeppers.whole = false
                state.toppingsGrid.jalapenoPeppers.right = false
                delete state.toppings.jalapenoPeppers
        
            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.jalapenoPeppers.left = true
                state.toppingsGrid.jalapenoPeppers.whole = false
                state.toppingsGrid.jalapenoPeppers.right = false
                state.toppings.jalapenoPeppers = action.payload
            }
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.jalapenoPeppers.whole == true){
                state.toppingsGrid.jalapenoPeppers.left = false
                state.toppingsGrid.jalapenoPeppers.whole = false
                state.toppingsGrid.jalapenoPeppers.right = false
                delete state.toppings.jalapenoPeppers
        
            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.jalapenoPeppers.left = false
                state.toppingsGrid.jalapenoPeppers.whole = true
                state.toppingsGrid.jalapenoPeppers.right = false
                state.toppings.jalapenoPeppers = action.payload
        
            }
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.jalapenoPeppers.right == true){
                state.toppingsGrid.jalapenoPeppers.left = false
                state.toppingsGrid.jalapenoPeppers.whole = false
                state.toppingsGrid.jalapenoPeppers.right = false
                delete state.toppings.jalapenoPeppers
        
            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.jalapenoPeppers.left = false
                state.toppingsGrid.jalapenoPeppers.whole = false
                state.toppingsGrid.jalapenoPeppers.right = true
                state.toppings.jalapenoPeppers = action.payload
        
            }
        
        },
        handlePineapple:(state, action) => {
            // console.log(action.payload)
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.pineapple.left == true){
                state.toppingsGrid.pineapple.left = false
                state.toppingsGrid.pineapple.whole = false
                state.toppingsGrid.pineapple.right = false
                delete state.toppings.pineapple
        
            }
            else if(action.payload.side === 'left side'){
                state.toppingsGrid.pineapple.left = true
                state.toppingsGrid.pineapple.whole = false
                state.toppingsGrid.pineapple.right = false
                state.toppings.pineapple = action.payload
            }
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.pineapple.whole == true){
                state.toppingsGrid.pineapple.left = false
                state.toppingsGrid.pineapple.whole = false
                state.toppingsGrid.pineapple.right = false
                delete state.toppings.pineapple
        
            }
            else if(action.payload.side === 'whole pizza'){
                state.toppingsGrid.pineapple.left = false
                state.toppingsGrid.pineapple.whole = true
                state.toppingsGrid.pineapple.right = false
                state.toppings.pineapple = action.payload
        
            }
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.pineapple.right == true){
                state.toppingsGrid.pineapple.left = false
                state.toppingsGrid.pineapple.whole = false
                state.toppingsGrid.pineapple.right = false
                delete state.toppings.pineapple
        
            }
            else if(action.payload.side === 'right side'){
                state.toppingsGrid.pineapple.left = false
                state.toppingsGrid.pineapple.whole = false
                state.toppingsGrid.pineapple.right = true
                state.toppings.pineapple = action.payload
        
            }
        
        },
        handleSpecialInstructions: (state, action) => {
            return state.specialInstructions = action.payload
        }

    },
});


export const { selectCrust, selectSize, handleHam, handleBeef, handleSalami, handlePepperoni,handleItalianSausage,handleBacon, handleOnions, handleMushrooms, handleBlackOlives, handleGreenPeppers, handleJalapenoPeppers, handlePineapple, handleSpecialInstructions } = pizzaBuilderSlice.actions;
export default pizzaBuilderSlice.reducer;

