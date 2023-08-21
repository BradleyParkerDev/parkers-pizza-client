import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'
import breadSticks from '../MenuImages/Breadsticks.png'
import calamari from '../MenuImages/Calamari.png'
import chocolateCake from '../MenuImages/chocolate cake.png'
import chocolateChipCookie from '../MenuImages/chocolate chip cookie.png'
import cokeTwoLiter from '../MenuImages/Coke 2 Liter.png'
import cokeCan from '../MenuImages/Coke Can.png'
import deepDish from '../MenuImages/deep dish.png'
import dietCokeTwoLiter from '../MenuImages/Diet Coke 2 Liter.png'
import dietCokeCan from '../MenuImages/Diet Coke Can.png'
import fantaTwoLiter from '../MenuImages/Fanta 2 liter.png'
import fantaCan from '../MenuImages/Fanta Can.png'
import handTossed from '../MenuImages/Hand Tossed.png'
import hotWings from '../MenuImages/Hotwings.png'
import mozzarellaSticks from '../MenuImages/Mozzarella Sticks.png'
import spriteTwoLiter from '../MenuImages/Sprite 2 Liter.png'
import spriteCan from '../MenuImages/Sprite Can.png'
import thinCrust from '../MenuImages/Thin crust.png'
import vanillaIceCream from '../MenuImages/Vanilla Ice Cream.png'


/////////////////////////////////////////////////////////////////////////
// Pizzas
/////////////////////////////////////////////////////////////////////////
const deepDishObj = {
    crust: 'Deep Dish',
    size: 'Sm',
    quantity: 1,
    name: 'Deep Dish Pizza',
    image: deepDish,
    imageHeight:'117.4px',
    imageWidth:'122px',
    price: 12.50,
    imageMarginTop: '10.05px'

}
const handTossedObj = {
    crust: 'Hand Tossed',
    size: 'Sm',
    quantity: 1,
    name: 'Hand Tossed Pizza',
    image: handTossed,
    imageHeight:'125px',
    imageWidth:'125px',
    price: 10,
    imageMarginTop: '10.05px'

}
const thinCrustObj = {
    crust: 'Thin Crust',
    size: 'Sm',
    quantity: 1,
    name: 'Thin Crust Pizza',
    image: thinCrust,
    imageHeight:'122.64px',
    imageWidth:'122px',
    price: 7.50,
    imageMarginTop: '10.05px'
}

export const pizzas = [
    deepDishObj,
    handTossedObj,
    thinCrustObj
]

/////////////////////////////////////////////////////////////////////////
// Sides
/////////////////////////////////////////////////////////////////////////
const hotWingsObj = {
    isPizza: false,
    quantity: 1,
    name: '12 Piece Hot Wings',
    image: hotWings,
    imageHeight:'115px',
    imageWidth:'170px',
    price: 12,
    imageMarginTop: '12.05px'

}
const breadSticksObj = {
    isPizza: false,
    quantity: 1,
    name: 'Bread Sticks',
    image: breadSticks,
    imageHeight:'106.8px',
    imageWidth:'170px',
    price: 5,
    imageMarginTop: '24.05px'

}
const mozzarellaSticksObj = {
    isPizza: false,
    quantity: 1,
    name: 'Mozzarella Sticks',
    image: mozzarellaSticks,
    imageHeight:'105.47px',
    imageWidth:'170px',
    price: 5,
    imageMarginTop: '19.05px'

}
const calamariObj = {
    isPizza: false,
    quantity: 1,
    name: 'Calamari',
    image: calamari,
    imageHeight:'127.32px',
    imageWidth:'170px',
    price: 7.5,
    imageMarginTop: '12.05px'

}

export const sides = [
    hotWingsObj,
    breadSticksObj,
    mozzarellaSticksObj,
    calamariObj
]

/////////////////////////////////////////////////////////////////////////
// Desserts
/////////////////////////////////////////////////////////////////////////
const chocolateCakeObj = {
    isPizza: false,
    quantity: 1,
    name: 'Chocolate Cake',
    image: chocolateCake,
    imageHeight:'128px',
    imageWidth:'128px',
    price: 6,
    imageMarginTop: '7.05px'

}
const chocolateChipCookieObj = {
    isPizza: false,
    quantity: 1,
    name: 'Chocolate Chip Cookie',
    image: chocolateChipCookie,
    imageHeight:'105.01px',
    imageWidth:'103px',
    price: 1.50,
    imageMarginTop: '18.05px'

}
const vanillaIceCreamObj = {
    isPizza: false,
    quantity: 1,
    name: 'Vanilla Ice Cream',
    image: vanillaIceCream,
    imageHeight:'90px',
    imageWidth:'90px',
    price: 3,
    imageMarginTop: '28.05px'

}

export const desserts = [
    chocolateCakeObj,
    chocolateChipCookieObj,
    vanillaIceCreamObj
]

/////////////////////////////////////////////////////////////////////////
// Beverages
/////////////////////////////////////////////////////////////////////////
const twoLiterSpriteObj = {
    isPizza: false,
    quantity: 1,
    name: '2 Liter Sprite',
    image: spriteTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'50px',
    imageMarginTop: '6.05px',
    price: 2.50,

}
const spriteCanObj = {
    isPizza: false,
    quantity: 1,
    name: 'Sprite Can',
    image: spriteCan,
    imageHeight:'90px',
    imageWidth:'49.93px',
    price: 1,
    imageMarginTop: '27.05px'

}
const twoLiterCokeObj = {
    isPizza: false,
    quantity: 1,
    name: '2 Liter Coke',
    image: cokeTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'40.47px',
    price: 2.50,
    imageMarginTop: '6.05px'

}
const cokeCanObj = {
    isPizza: false,
    quantity: 1,
    name: 'Coke Can',
    image: cokeCan,
    imageHeight:'90px',
    imageWidth:'60.15px',
    price: 1,
    imageMarginTop: '27.05px'

}
const twoLiterDietCokeObj = {
    isPizza: false,
    quantity: 1,
    name: '2 Liter Diet Coke',
    image: dietCokeTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'41.14px',
    price: 2.50,
    imageMarginTop: '6.05px'

}
const dietCokeCanObj = {
    isPizza: false,
    quantity: 1,
    name: 'Diet Coke Can',
    image: dietCokeCan,
    imageHeight:'90px',
    imageWidth:'47.71px',
    price: 1,
    imageMarginTop: '27.05px'

}
const twoLiterFantaObj = {
    isPizza: false,
    quantity: 1,
    name: '2 Liter Fanta',
    image: fantaTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'41.66px',
    price: 2.50,
    imageMarginTop: '6.05px'

}
const fantaCanObj = {
    isPizza: false,
    quantity: 1,
    name: 'Fanta Can',
    image: fantaCan,
    imageHeight:'90px',
    imageWidth:'47.36px',
    price: 1,
    imageMarginTop: '27.05px'

}

export const beverages = [
    twoLiterSpriteObj,
    spriteCanObj,
    twoLiterCokeObj,
    cokeCanObj,
    twoLiterDietCokeObj,
    dietCokeCanObj,
    twoLiterFantaObj,
    fantaCanObj
]


const cartSideItems = {
    cartHotWings: hotWingsObj,
    cartBreadSticks: breadSticksObj,
    cartMozzarellaSticks: mozzarellaSticksObj,
    cartCalamari: calamariObj
}

const cartDessertItems = {
    cartChocolateCake: chocolateCakeObj,
    cartChocolateChipCookie: chocolateChipCookieObj,
    cartVanillaIceCream: vanillaIceCreamObj
}

const cartBeverageItems = {
    cartSpriteTwoLiter: twoLiterSpriteObj,
    cartSpriteCan: spriteCanObj,
    cartCokeTwoLiter: twoLiterCokeObj,
    cartCokeCan: cokeCanObj,
    cartDietCokeTwoLiter: twoLiterDietCokeObj,
    cartDietCokeCan: dietCokeCanObj,
    cartFantaTwoLiter: twoLiterFantaObj,
    cartFantaCan: fantaCan
}


const initialState = {
    cartId: uuidv4(),
    pizzas:{
        pizzasArr: [],
        pizzasTotal:0
    },
    items: {},
    lastItem: false,
    pizzasInCart: false,
    itemsInCart: false,
    userLoggedIn: false,
    buildType: '',
    deals:{},
    total: 0
}



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addPizzaToCart: (state,action) =>{
            console.log(action.payload)
            let tempPizza = action.payload
            console.log(tempPizza)
            state.pizzas.pizzasArr.push(tempPizza)


            
        },
        updatePizzaInCart: (state,action) =>{
            console.log(action.payload)
            console.log(state.pizzas.pizzasArr.indexOf(action.payload.pizzaId))
            let index = '';
            for(let i = 0; i < state.pizzas.pizzasArr.length; i++){

                if(state.pizzas.pizzasArr[i].pizzaId === action.payload.pizzaId){

                    state.pizzas.pizzasArr.splice(i,1,action.payload)
                }
            }


            
        },       
        updatePizzaQuantity: (state,action) =>{
            console.log(action.payload.type)
            console.log(action.payload.pizzaId)

            if(action.payload.type === 'increase'){
                for(let i = 0; i < state.pizzas.pizzasArr.length; i++){
                    // console.log(action.payload)

                    if( state.pizzas.pizzasArr[i].pizzaId === action.payload.pizzaId && state.pizzas.pizzasArr[i].quantity < 10){
                        state.pizzas.pizzasArr[i].quantity++
                        console.log(`Pizza Quantity: ${state.pizzas.pizzasArr[i].quantity}`)
                        console.log(`pizzaId: ${state.pizzas.pizzasArr[i].pizzaId}`)

                    }
                }
            }
            if(action.payload.type === 'decrease'){
                for(let i = 0; i < state.pizzas.pizzasArr.length; i++){
                    console.log(action.payload)
                    if(state.pizzas.pizzasArr[i].pizzaId === action.payload.pizzaId && state.pizzas.pizzasArr[i].quantity !== 0){
                        state.pizzas.pizzasArr[i].quantity--
                        console.log(`Pizza Quantity: ${state.pizzas.pizzasArr[i].quantity}`)
                        console.log(`pizzaId: ${state.pizzas.pizzasArr[i].pizzaId}`)
                    }
                    if(state.pizzas.pizzasArr[i].pizzaId === action.payload.pizzaId && state.pizzas.pizzasArr[i].quantity === 0){
                        if(state.lastItem === true){
                            console.log('Removing Last Item.')
                            localStorage.removeItem('localCart')
                            state.pizzas.pizzasArr.splice(i,1)
                            state.lastItem = false;
                            state.total = 0; 
                        }else{
                            state.pizzas.pizzasArr.splice(i,1)
                        }                    
                    }
                }                
            }
            
        },
        removePizzaFromCart: (state,action) =>{
            if(action.payload.type === 'remove'){
                for(let i = 0; i < state.pizzas.pizzasArr.length; i++){
                    if( state.pizzas.pizzasArr[i].pizzaId === action.payload.pizzaId){
                        if(state.lastItem === true){
                            console.log('Removing Last Item.')
                            localStorage.removeItem('localCart')
                            state.pizzas.pizzasArr.splice(i,1)
                            state.lastItem = false;
                            state.total = 0; 
                        }else{
                            state.pizzas.pizzasArr.splice(i,1)
                        }
                    }
                }
            }  



            // if(state.lastItem === true){
            //     localStorage.removeItem('localCart')
            //     delete state.items.hotWingsObj;
            //     state.lastItem = false;
            //     state.total = 0; 
            // }                
            // delete state.items.hotWingsObj;








        },
        addItemToCart: (state, action) => {

            ///////////////////////////////////////////////////////////////////////////////////
            // Sides
            ///////////////////////////////////////////////////////////////////////////////////


            // 12 Piece Hot Wings
            if(action.payload.type === 'add' && action.payload.name === '12 Piece Hot Wings'){
                state.items.hotWingsObj = hotWingsObj;
            }

            // Bread Sticks
            if(action.payload.type === 'add' && action.payload.name === 'Bread Sticks'){
                state.items.breadSticksObj = breadSticksObj;
            }

            // Mozzarella Sticks
            if(action.payload.type === 'add' && action.payload.name === 'Mozzarella Sticks'){
                state.items.mozzarellaSticksObj = mozzarellaSticksObj;
            }

            // Calamari
            if(action.payload.type === 'add' && action.payload.name === 'Calamari'){
                state.items.calamariObj = calamariObj;
            }
            ///////////////////////////////////////////////////////////////////////////////////
            // Desserts
            ///////////////////////////////////////////////////////////////////////////////////


            // Chocolate Cake
            if(action.payload.type === 'add' && action.payload.name === 'Chocolate Cake'){
                state.items.chocolateCakeObj = chocolateCakeObj;
            }

            // Chocolate Chip Cookie
            if(action.payload.type === 'add' && action.payload.name === 'Chocolate Chip Cookie'){
                state.items.chocolateChipCookieObj = chocolateChipCookieObj;
            }

            // Vanilla Ice Cream
            if(action.payload.type === 'add' && action.payload.name === 'Vanilla Ice Cream'){
                state.items.vanillaIceCreamObj = vanillaIceCreamObj;
            }




            ///////////////////////////////////////////////////////////////////////////////////
            // Beverages
            ///////////////////////////////////////////////////////////////////////////////////


            // Sprite
            if(action.payload.type === 'add' && action.payload.name === '2 Liter Sprite'){
                state.items.twoLiterSpriteObj = twoLiterSpriteObj;
            }
            if(action.payload.type === 'add' && action.payload.name === 'Sprite Can'){
                state.items.spriteCanObj = spriteCanObj;
            }

            // Coke
            if(action.payload.type === 'add' && action.payload.name === '2 Liter Coke'){
                state.items.twoLiterCokeObj = twoLiterCokeObj;
            }
            if(action.payload.type === 'add' && action.payload.name === 'Coke Can'){
                state.items.cokeCanObj = cokeCanObj;
            }

            // Diet Coke
            if(action.payload.type === 'add' && action.payload.name === '2 Liter Diet Coke'){
                state.items.twoLiterDietCokeObj = twoLiterDietCokeObj;
            }
            if(action.payload.type === 'add' && action.payload.name === 'Diet Coke Can'){
                state.items.dietCokeCanObj = dietCokeCanObj;
            }

            // Fanta
            if(action.payload.type === 'add' && action.payload.name === '2 Liter Fanta'){
                state.items.twoLiterFantaObj = twoLiterFantaObj;
            }
            if(action.payload.type === 'add' && action.payload.name === 'Fanta Can'){
                state.items.fantaCanObj = fantaCanObj;
            }

            //Set lastItem Property
            if(Object.entries(state.items).length === 1){
                state.lastItem = true;
            }else{
                state.lastItem = false;
            }
            console.log(Object.entries(state.items).length)
            console.log(state.lastItem)

        },
        updateQuantity:(state, action) =>{


            ///////////////////////////////////////////////////////////////////////////////////
            // Sides
            ///////////////////////////////////////////////////////////////////////////////////


            // 12 Piece Hot Wings
            if(action.payload.type === 'increase' && action.payload.name === '12 Piece Hot Wings'){
                if(state.items.hotWingsObj.quantity !== 10){
                    state.items.hotWingsObj.quantity += 1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === '12 Piece Hot Wings'){
                if(state.items.hotWingsObj.quantity !== 0){
                    state.items.hotWingsObj.quantity -= 1;
                }
                if(state.lastItem === true && state.items.hotWingsObj.quantity === 0){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.hotWingsObj;
                    state.total = 0; 
   
                }else if(state.items.hotWingsObj.quantity === 0){
                    delete state.items.hotWingsObj;
                }   
            }

            // Bread Sticks
            if(action.payload.type === 'increase' && action.payload.name === 'Bread Sticks'){
                if(state.items.breadSticksObj.quantity !== 10){
                    state.items.breadSticksObj.quantity += 1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === 'Bread Sticks'){
                if(state.items.breadSticksObj.quantity !== 0){
                    state.items.breadSticksObj.quantity -= 1;
                }
                if(state.lastItem === true && state.items.breadSticksObj.quantity === 0){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.breadSticksObj; 
   
                }else if(state.items.breadSticksObj.quantity === 0){
                    delete state.items.breadSticksObj;
                }
            }
            // Mozzarella Sticks
            if(action.payload.type === 'increase' && action.payload.name === 'Mozzarella Sticks'){
                if(state.items.mozzarellaSticksObj.quantity !== 10){
                    state.items.mozzarellaSticksObj.quantity += 1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === 'Mozzarella Sticks'){
                if(state.items.mozzarellaSticksObj.quantity !== 0){
                    state.items.mozzarellaSticksObj.quantity -= 1;
                }
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.mozzarellaSticksObj; 
   
                }else if(state.items.mozzarellaSticksObj.quantity === 0){
                    delete state.items.mozzarellaSticksObj;
                }
            }
            // Calamari
            if(action.payload.type === 'increase' && action.payload.name === 'Calamari'){
                if(state.items.calamariObj.quantity !== 10){
                    state.items.calamariObj.quantity += 1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === 'Calamari'){
                if(state.items.calamariObj.quantity !== 0){
                    state.items.calamariObj.quantity -= 1;
                }
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.calamariObj; 
   
                }else if(state.items.calamariObj.quantity === 0){
                    delete state.items.calamariObj
                }
            }
            ///////////////////////////////////////////////////////////////////////////////////
            // Desserts
            ///////////////////////////////////////////////////////////////////////////////////


            // Chocolate Cake
            if(action.payload.type === 'increase' && action.payload.name === 'Chocolate Cake'){
                if(state.items.chocolateCakeObj.quantity !== 10){
                    state.items.chocolateCakeObj.quantity += 1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === 'Chocolate Cake'){
                if(state.items.chocolateCakeObj.quantity !== 0){
                    state.items.chocolateCakeObj.quantity -= 1;
                }
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.chocolateCakeObj; 
   
                }else if(state.items.chocolateCakeObj.quantity === 0){
                    delete state.items.chocolateCakeObj;
                }
            }

            // Chocolate Chip Cookie
            if(action.payload.type === 'increase' && action.payload.name === 'Chocolate Chip Cookie'){
                if(state.items.chocolateChipCookieObj.quantity !== 10){
                    state.items.chocolateChipCookieObj.quantity += 1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === 'Chocolate Chip Cookie'){
                if(state.items.chocolateChipCookieObj.quantity !== 0){
                    state.items.chocolateChipCookieObj.quantity -= 1;
                }
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.chocolateChipCookieObj; 
   
                }else if(state.items.chocolateChipCookieObj.quantity === 0){
                    delete state.items.chocolateChipCookieObj;
                }
            }

            // Vanilla Ice Cream
            if(action.payload.type === 'increase' && action.payload.name === 'Vanilla Ice Cream'){
                if(state.items.vanillaIceCreamObj.quantity !== 10){
                    state.items.vanillaIceCreamObj.quantity += 1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === 'Vanilla Ice Cream'){
                if(state.items.vanillaIceCreamObj.quantity !== 0){
                    state.items.vanillaIceCreamObj.quantity -= 1;
                }
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.vanillaIceCreamObj; 
   
                }else if(state.items.vanillaIceCreamObj.quantity === 0){
                    delete state.items.vanillaIceCreamObj;
                }
            }



            ///////////////////////////////////////////////////////////////////////////////////
            // Beverages
            ///////////////////////////////////////////////////////////////////////////////////

            // Sprite
            if(action.payload.type === 'increase' && action.payload.name === '2 Liter Sprite'){
                if(state.items.twoLiterSpriteObj.quantity !== 10){
                    state.items.twoLiterSpriteObj.quantity +=1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === '2 Liter Sprite'){
                if(state.items.twoLiterSpriteObj.quantity !== 0){
                    state.items.twoLiterSpriteObj.quantity -=1;
                }
                if(state.lastItem === true ){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.twoLiterSpriteObj; 
   
                }else if(state.items.twoLiterSpriteObj.quantity === 0){
                    delete state.items.twoLiterSpriteObj;
                }
            }


            if(action.payload.type === 'increase' && action.payload.name === 'Sprite Can'){
                if(state.items.spriteCanObj.quantity !== 10){
                    state.items.spriteCanObj.quantity +=1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === 'Sprite Can'){
                if(state.items.spriteCanObj.quantity !== 0){
                    state.items.spriteCanObj.quantity -=1;
                }
                if(state.lastItem === true ){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.spriteCanObj; 
   
                }else if(state.items.spriteCanObj.quantity === 0){
                    delete state.items.spriteCanObj;
                }
            }

            // Coke
            if(action.payload.type === 'increase' && action.payload.name === '2 Liter Coke'){
                if(state.items.twoLiterCokeObj.quantity !== 10){
                    state.items.twoLiterCokeObj.quantity +=1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === '2 Liter Coke'){
                if(state.items.twoLiterCokeObj.quantity !== 0){
                    state.items.twoLiterCokeObj.quantity -=1;
                }
                if(state.lastItem === true ){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.twoLiterCokeObj; 
   
                }else if(state.items.twoLiterCokeObj.quantity === 0){
                    delete state.items.twoLiterCokeObj;
                }
            }
            if(action.payload.type === 'increase' && action.payload.name === 'Coke Can'){
                if(state.items.cokeCanObj.quantity !== 10){
                    state.items.cokeCanObj.quantity +=1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === 'Coke Can'){
                if(state.items.cokeCanObj.quantity !== 0){
                    state.items.cokeCanObj.quantity -=1;
                }
                if(state.lastItem === true ){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.cokeCanObj; 
   
                }else if(state.items.cokeCanObj.quantity === 0){
                    delete state.items.cokeCanObj;
                }
            }


            // Diet Coke
            if(action.payload.type === 'increase' && action.payload.name === '2 Liter Diet Coke'){
                if(state.items.twoLiterDietCokeObj.quantity !== 10){
                    state.items.twoLiterDietCokeObj.quantity +=1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === '2 Liter Diet Coke'){
                if(state.items.twoLiterDietCokeObj.quantity !== 0){
                    state.items.twoLiterDietCokeObj.quantity -=1;
                }
                if(state.lastItem === true ){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.twoLiterDietCokeObj; 
   
                }else if(state.items.twoLiterDietCokeObj.quantity === 0){
                    delete state.items.twoLiterDietCokeObj;
                }
            }
            if(action.payload.type === 'increase' && action.payload.name === 'Diet Coke Can'){
                if(state.items.dietCokeCanObj.quantity !== 10){
                    state.items.dietCokeCanObj.quantity +=1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === 'Diet Coke Can'){
                if(state.items.dietCokeCanObj.quantity !== 0){
                    state.items.dietCokeCanObj.quantity -=1;
                }
                if(state.lastItem === true ){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.dietCokeCanObj; 
   
                }else if(state.items.dietCokeCanObj.quantity === 0){
                    delete state.items.dietCokeCanObj;
                }
            }


            // Fanta
            if(action.payload.type === 'increase' && action.payload.name === '2 Liter Fanta'){
                if(state.items.twoLiterFantaObj.quantity !== 10){
                    state.items.twoLiterFantaObj.quantity +=1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === '2 Liter Fanta'){
                if(state.items.twoLiterFantaObj.quantity !== 0){
                    state.items.twoLiterFantaObj.quantity -=1;
                }
                if(state.lastItem === true ){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.twoLiterFantaObj; 
   
                }else if(state.items.twoLiterFantaObj.quantity === 0){
                    delete state.items.twoLiterFantaObj;
                }
            }
            if(action.payload.type === 'increase' && action.payload.name === 'Fanta Can'){
                if(state.items.fantaCanObj.quantity !== 10){
                    state.items.fantaCanObj.quantity +=1;
                }
            }
            if(action.payload.type === 'decrease' && action.payload.name === 'Fanta Can'){
                if(state.items.fantaCanObj.quantity !== 0){
                    state.items.fantaCanObj.quantity -=1;
                }
                if(state.lastItem === true ){
                    localStorage.removeItem('localCart')
                    state.itemsInCart = false;
                    delete state.items.fantaCanObj; 
   
                }else if(state.items.fantaCanObj.quantity === 0){
                    delete state.items.fantaCanObj;
                }
            }
        },
        removeItemFromCart:(state,action)=>{


            ///////////////////////////////////////////////////////////////////////////////////
            // Sides
            ///////////////////////////////////////////////////////////////////////////////////


            // 12 Piece Hot Wings

            if(action.payload.type === 'remove' && action.payload.name === '12 Piece Hot Wings'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.hotWingsObj;
                    state.lastItem = false;
                    state.total = 0; 
                }                
                delete state.items.hotWingsObj;
            }

            // Bread Sticks

            if(action.payload.type === 'remove' && action.payload.name === 'Bread Sticks'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.breadSticksObj;
                    state.lastItem = false;
                    state.total = 0;  
                }                
                delete state.items.breadSticksObj;
            }
            // Mozzarella Sticks

            if(action.payload.type === 'remove' && action.payload.name === 'Mozzarella Sticks'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.mozzarellaSticksObj;
                    state.lastItem = false;
                    state.total = 0;  
                }                
                delete state.items.mozzarellaSticksObj; 
            }
            // Calamari
            if(action.payload.type === 'remove' && action.payload.name === 'Calamari'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.calamariObj;
                    state.lastItem = false;
                    state.total = 0;  
                }                
                delete state.items.calamariObj
            }


            ///////////////////////////////////////////////////////////////////////////////////
            // Desserts
            ///////////////////////////////////////////////////////////////////////////////////


            if(action.payload.type === 'remove' && action.payload.name === 'Chocolate Cake'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.chocolateCakeObj;
                    state.lastItem = false;
                    state.total = 0;  
                }
                delete state.items.chocolateCakeObj;
            }
            if(action.payload.type === 'remove' && action.payload.name === 'Chocolate Chip Cookie'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.chocolateChipCookieObj;
                    state.lastItem = false;
                    state.total = 0;  
                }
                delete state.items.chocolateChipCookieObj;
            }
            if(action.payload.type === 'remove' && action.payload.name === 'Vanilla Ice Cream'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.vanillaIceCreamObj;
                    state.lastItem = false;
                    state.total = 0;  
                }
                delete state.items.vanillaIceCreamObj;
            }


            ///////////////////////////////////////////////////////////////////////////////////
            // Beverages
            ///////////////////////////////////////////////////////////////////////////////////


            if(action.payload.type === 'remove' && action.payload.name === '2 Liter Sprite'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.twoLiterSpriteObj;
                    state.lastItem = false;
                    state.total = 0;  
                }
                delete state.items.twoLiterSpriteObj; 
            }
            if(action.payload.type === 'remove' && action.payload.name === 'Sprite Can'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.spriteCanObj;
                    state.lastItem = false;
                    state.total = 0;  
                }
                delete state.items.spriteCanObj;
            }
            if(action.payload.type === 'remove' && action.payload.name === '2 Liter Coke'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.twoLiterCokeObj; 
                    state.lastItem = false;
                    state.total = 0; 
                }
                delete state.items.twoLiterCokeObj; 
            }
            if(action.payload.type === 'remove' && action.payload.name === 'Coke Can'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.cokeCanObj;
                    state.lastItem = false;
                    state.total = 0;  
                }
                delete state.items.cokeCanObj;
            }
            if(action.payload.type === 'remove' && action.payload.name === '2 Liter Diet Coke'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.twoLiterDietCokeObj;
                    state.lastItem = false;
                    state.total = 0;  
                }
                delete state.items.twoLiterDietCokeObj; 
            }
            if(action.payload.type === 'remove' && action.payload.name === 'Diet Coke Can'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.dietCokeCanObj; 
                    state.lastItem = false;
                    state.total = 0; 
                }
                delete state.items.dietCokeCanObj;
            }
            if(action.payload.type === 'remove' && action.payload.name === '2 Liter Fanta'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.twoLiterFantaObj;
                    state.lastItem = false;
                    state.total = 0;  
                }                
                delete state.items.twoLiterFantaObj; 
            }
            if(action.payload.type === 'remove' && action.payload.name === 'Fanta Can'){
                if(state.lastItem === true){
                    localStorage.removeItem('localCart')
                    delete state.items.fantaCanObj; 
                    state.lastItem = false;
                    state.total = 0; 
                }
                delete state.items.fantaCanObj;
            }

        },
        setCart:(state,action)=>{
            console.log(action.payload)
            state.items = action.payload.items;
            state.pizzas = action.payload.pizzas;
        },      
        addDealToCart:(state,action)=>{

        },
        checkCartStatus: (state, action) =>{

            //Checks if menu items or pizzas are in cartSlice
            if(Object.entries(state.items).length >= 1 || state.pizzas.pizzasArr.length >= 1){
                state.itemsInCart = true;
            }
            //Set lastItem Property
            if((Object.entries(state.items).length === 1 && state.pizzas.pizzasArr.length === 0)|| (state.pizzas.pizzasArr.length === 1 && Object.entries(state.items).length === 0)){
                state.lastItem = true;
            }else{
                state.lastItem = false;
            }

            
            

        },
        checkUserStatus: (state, action) => {
            state.userLoggedIn = action.payload;
        },
        checkOut:(state, action) =>{

        },
        calculateCartTotal: (state, action) => {
            let cartTotal = 0;
            let pizzasTotal = 0;
            for(const key in state.items){
                cartTotal = cartTotal + (state.items[key].quantity * state.items[key].price)
            }
            if(state.pizzas.pizzasArr.length >= 1){
                for(let i = 0; i < state.pizzas.pizzasArr.length; i++){
                    pizzasTotal = pizzasTotal + (state.pizzas.pizzasArr[i].quantity * state.pizzas.pizzasArr[i].price)
                }
            }
            state.pizzas.pizzasTotal = pizzasTotal
            state.total = cartTotal + pizzasTotal
        }  
    }
})

export const { addPizzaToCart,updatePizzaInCart,updatePizzaQuantity, removePizzaFromCart, addItemToCart, updateQuantity,removeItemFromCart,setCart,addDealToCart, checkCartStatus,checkUserStatus,checkOut, calculateCartTotal} = cartSlice.actions;
export default cartSlice.reducer;