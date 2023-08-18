import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'
import deepDish from '../MenuImages/deep dish.png'
import handTossed from '../MenuImages/Hand Tossed.png'
import thinCrust from '../MenuImages/Thin crust.png'

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

const deepDishObj = {
    quantity: 1,
    name: 'Deep Dish Pizza',
    image: deepDish,
    imageHeight:'117.4px',
    imageWidth:'122px',
    price: 12.50,
    imageMarginTop: '10.05px'

}
const handTossedObj = {
    quantity: 1,
    name: 'Hand Tossed Pizza',
    image: handTossed,
    imageHeight:'125px',
    imageWidth:'125px',
    price: 10,
    imageMarginTop: '10.05px'

}
const thinCrustObj = {
    quantity: 1,
    name: 'Thin Crust Pizza',
    image: thinCrust,
    imageHeight:'122.64px',
    imageWidth:'122px',
    price: 7.50,
    imageMarginTop: '10.05px'
}

const initialState ={
    pizzaId: uuidv4(),

    //Basic Pizza Info
    name: 'Deep Dish Pizza',
    image: deepDish,
    imageHeight:'117.4px',
    imageWidth:'122px',
    imageMarginTop: '10.05px',

    //Custom Pizza Info
    crust: 'Deep Dish',
    size: 'Sm',
    toppings:{},
    toppingsGrid: toppingsGridObj,
    specialInstructions: '',
    buildType: 'create',
    quantity: 1,
    price: 0
}


const pizzaBuilderSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        selectCrust:(state, action) =>{
            state.crust = action.payload
            
            if(state.crust === 'Deep Dish'){
                state.name = deepDishObj.name
                state.image = deepDishObj.image
                state.imageHeight = deepDishObj.imageHeight
                state.imageWidth = deepDishObj.imageWidth
                state.imageMarginTop = deepDish.imageMarginTop
            }
            if(state.crust === 'Hand Tossed'){
                state.name = handTossedObj.name
                state.image = handTossedObj.image
                state.imageHeight = handTossedObj.imageHeight
                state.imageWidth = handTossedObj.imageWidth
                state.imageMarginTop = handTossedObj.imageMarginTop
            }
            if(state.crust === 'Thin Crust'){
                state.name = thinCrustObj.name
                state.image = thinCrustObj.image
                state.imageHeight = thinCrustObj.imageHeight
                state.imageWidth = thinCrustObj.imageWidth
                state.imageMarginTop = thinCrustObj.imageMarginTop
            }



            return state;
        },
        selectSize:(state, action) =>{
            state.size = action.payload
            return state;
        },
        handleHam:(state, action) => {
            
            if(action.payload.side === 'left side' && state.toppingsGrid.ham.left === true){
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


            if(action.payload.side === 'whole pizza' && state.toppingsGrid.ham.whole === true){
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



            if(action.payload.side === 'right side'  && state.toppingsGrid.ham.right === true){
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
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.beef.left === true){
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
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.beef.whole === true){
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
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.beef.right === true){
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
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.salami.left === true){
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
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.salami.whole === true){
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
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.salami.right === true){
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
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.pepperoni.left === true){
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
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.pepperoni.whole === true){
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
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.pepperoni.right === true){
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
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.italianSausage.left === true){
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
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.italianSausage.whole === true){
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
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.italianSausage.right === true){
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
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.bacon.left === true){
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
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.bacon.whole === true){
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
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.bacon.right === true){
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
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.onions.left === true){
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
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.onions.whole === true){
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
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.onions.right === true){
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
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.mushrooms.left === true){
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
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.mushrooms.whole === true){
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
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.mushrooms.right === true){
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
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.blackOlives.left === true){
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
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.blackOlives.whole === true){
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
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.blackOlives.right === true){
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
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.greenPeppers.left === true){
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
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.greenPeppers.whole === true){
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
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.greenPeppers.right === true){
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
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.jalapenoPeppers.left === true){
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
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.jalapenoPeppers.whole === true){
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
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.jalapenoPeppers.right === true){
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
        
        
            if(action.payload.side === 'left side' && state.toppingsGrid.pineapple.left === true){
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
        
        
            if(action.payload.side === 'whole pizza' && state.toppingsGrid.pineapple.whole === true){
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
        
        
        
            if(action.payload.side === 'right side'  && state.toppingsGrid.pineapple.right === true){
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
 
            state.specialInstructions = action.payload
        },
        calculateTotal: (state, action) => {

            let total = 0;
            for (const key in state.toppings) {

                // console.log(state.toppings[key].side)
                if(state.toppings[key].side === 'whole pizza'){
                    total+=1
                }else{
                    total+=.5
                }
                   
                
            }
            if(state.crust === 'Deep Dish'){
                total+= 7.50
            }
            if(state.crust === 'Hand Tossed'){
                total+= 5.00

            }
            if(state.crust === 'Thin Crust'){
                total+= 2.50
 
            }
            
            if(state.size === 'Sm'){
                total+= 5
            }
            if(state.size === 'Med'){
                total+= 10

            }
            if(state.size === 'Lg'){
                total+= 15
 
            }

            // console.log(total)
            state.price = total
        },
        resetPizza: (state) => {
            state.pizzaId = uuidv4()
            state.crust= 'Deep Dish'
            state.size= 'Sm'
            state.toppings= {}
            state.toppingsGrid= toppingsGridObj
            state.specialInstructions= ''
            state.quantity =1
            state.price= 0

            return state ;
        }

    }
});


export const { selectCrust, selectSize, handleHam, handleBeef, handleSalami, handlePepperoni,handleItalianSausage,handleBacon, handleOnions, handleMushrooms, handleBlackOlives, handleGreenPeppers, handleJalapenoPeppers, handlePineapple, handleSpecialInstructions, calculateTotal, resetPizza } = pizzaBuilderSlice.actions;
export default pizzaBuilderSlice.reducer;

