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

console.log(typeof(deepDish))

/////////////////////////////////////////////////////////////////////////
// Pizzas
/////////////////////////////////////////////////////////////////////////
const deepDishObj = {
    name: 'Deep Dish Pizza',
    image: deepDish,
    imageHeight:'117.4px',
    imageWidth:'122px',
    price: 12.50,
    imageMarginTop: '10.05px'

}
const handTossedObj = {
    name: 'Hand Tossed Pizza',
    image: handTossed,
    imageHeight:'125px',
    imageWidth:'125px',
    price: 10,
    imageMarginTop: '10.05px'

}
const thinCrustObj = {
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
    name: '12 Piece Hot Wings',
    image: hotWings,
    imageHeight:'115px',
    imageWidth:'170px',
    price: 12,
    imageMarginTop: '12.05px'

}
const breadSticksObj = {
    name: 'Bread Sticks',
    image: breadSticks,
    imageHeight:'106.8px',
    imageWidth:'170px',
    price: 5,
    imageMarginTop: '24.05px'

}
const mozzarellaSticksObj = {
    name: 'Mozzarella Sticks',
    image: mozzarellaSticks,
    imageHeight:'105.47px',
    imageWidth:'170px',
    price: 5,
    imageMarginTop: '19.05px'

}
const calamariObj = {
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
    name: 'Chocolate Cake',
    image: chocolateCake,
    imageHeight:'128px',
    imageWidth:'128px',
    price: 6,
    imageMarginTop: '7.05px'

}
const chocolateChipCookieObj = {
    name: 'Chocolate Chip Cookie',
    image: chocolateChipCookie,
    imageHeight:'105.01px',
    imageWidth:'103px',
    price: 1.50,
    imageMarginTop: '18.05px'

}
const vanillaIceCreamObj = {
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
    name: '2 Liter Sprite',
    image: spriteTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'50px',
    imageMarginTop: '6.05px',
    price: 2.50,
    quantity:0

}
const spriteCanObj = {
    name: 'Sprite Can',
    image: spriteCan,
    imageHeight:'90px',
    imageWidth:'49.93px',
    price: 1,
    imageMarginTop: '27.05px'

}
const twoLiterCokeObj = {
    name: '2 Liter Coke',
    image: cokeTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'40.47px',
    price: 2.50,
    imageMarginTop: '6.05px'

}
const cokeCanObj = {
    name: 'Coke Can',
    image: cokeCan,
    imageHeight:'90px',
    imageWidth:'60.15px',
    price: 1,
    imageMarginTop: '27.05px'

}
const twoLiterDietCokeObj = {
    name: '2 Liter Diet Coke',
    image: dietCokeTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'41.14px',
    price: 2.50,
    imageMarginTop: '6.05px'

}
const dietCokeCanObj = {
    name: 'Diet Coke Can',
    image: dietCokeCan,
    imageHeight:'90px',
    imageWidth:'47.71px',
    price: 1,
    imageMarginTop: '27.05px'

}
const twoLiterFantaObj = {
    name: '2 Liter Fanta',
    image: fantaTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'41.66px',
    price: 2.50,
    imageMarginTop: '6.05px'

}
const fantaCanObj = {
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
    pizzas:{},
    items: {},
    deals:{},
    total: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItemToCart: (state, action) => {
            console.log(action.payload.name)
            console.log(action.payload.type)

            ///////////////////////////////////////////////////////////////////////////////////
            // Sides
            ///////////////////////////////////////////////////////////////////////////////////


            // 12 Piece Hot Wings
            if(action.payload.type === 'add' && action.payload.name === '12 Piece Hot Wings'){
                state.items.hotWingsObj = hotWingsObj;
                state.items.hotWingsObj.quantity = 1;
            }

            // Bread Sticks
            if(action.payload.type === 'add' && action.payload.name === 'Bread Sticks'){
                state.items.breadSticksObj = breadSticksObj;
                state.items.breadSticksObj.quantity = 1;
            }

            // Mozzarella Sticks
            if(action.payload.type === 'add' && action.payload.name === 'Mozzarella Sticks'){
                state.items.mozzarellaSticksObj = mozzarellaSticksObj;
                state.items.mozzarellaSticksObj.quantity = 1;
            }

            // Calamari
            if(action.payload.type === 'add' && action.payload.name === 'Calamari'){
                state.items.calamariObj = calamariObj;
                state.items.calamariObj.quantity = 1;
            }
            ///////////////////////////////////////////////////////////////////////////////////
            // Desserts
            ///////////////////////////////////////////////////////////////////////////////////


            // Chocolate Cake
            if(action.payload.type === 'add' && action.payload.name === 'Chocolate Cake'){
                state.items.chocolateCakeObj = chocolateCakeObj;
                state.items.chocolateCakeObj.quantity = 1;
            }

            // Chocolate Chip Cookie
            if(action.payload.type === 'add' && action.payload.name === 'Chocolate Chip Cookie'){
                state.items.chocolateChipCookieObj = chocolateChipCookieObj;
                state.items.chocolateChipCookieObj.quantity = 1;
            }

            // Vanilla Ice Cream
            if(action.payload.type === 'add' && action.payload.name === 'Vanilla Ice Cream'){
                state.items.vanillaIceCreamObj = vanillaIceCreamObj;
                state.items.vanillaIceCreamObj.quantity = 1;
            }




            ///////////////////////////////////////////////////////////////////////////////////
            // Beverages
            ///////////////////////////////////////////////////////////////////////////////////


            // Sprite
            if(action.payload.type === 'add' && action.payload.name === '2 Liter Sprite'){
                state.items.twoLiterSpriteObj = twoLiterSpriteObj;
                state.items.twoLiterSpriteObj.quantity = 1;
            }
            if(action.payload.type === 'add' && action.payload.name === 'Sprite Can'){
                state.items.spriteCanObj = spriteCanObj;
                state.items.spriteCanObj.quantity = 1;
            }

            // Coke
            if(action.payload.type === 'add' && action.payload.name === '2 Liter Coke'){
                state.items.twoLiterCokeObj = twoLiterCokeObj;
                state.items.twoLiterCokeObj.quantity = 1;
            }
            if(action.payload.type === 'add' && action.payload.name === 'Coke Can'){
                state.items.cokeCanObj = cokeCanObj;
                state.items.cokeCanObj.quantity = 1;
            }

            // Diet Coke
            if(action.payload.type === 'add' && action.payload.name === '2 Liter Diet Coke'){
                state.items.twoLiterDietCokeObj = twoLiterDietCokeObj;
                state.items.twoLiterDietCokeObj.quantity = 1;
            }
            if(action.payload.type === 'add' && action.payload.name === 'Diet Coke Can'){
                state.items.dietCokeCanObj = dietCokeCanObj;
                state.items.dietCokeCanObj.quantity = 1;
            }

            // Fanta
            if(action.payload.type === 'add' && action.payload.name === '2 Liter Fanta'){
                state.items.twoLiterFantaObj = twoLiterFantaObj;
                state.items.twoLiterFantaObj.quantity = 1;
            }
            if(action.payload.type === 'add' && action.payload.name === 'Fanta Can'){
                state.items.fantaCanObj = fantaCanObj;
                state.items.fantaCanObj.quantity = 1;
            }
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
                if(state.items.hotWingsObj.quantity === 0){
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
                if(state.items.breadSticksObj.quantity === 0){
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
                if(state.items.mozzarellaSticksObj.quantity === 0){
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
                if(state.items.calamariObj.quantity === 0){
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
                if(state.items.chocolateCakeObj.quantity === 0){
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
                if(state.items.chocolateChipCookieObj.quantity === 0){
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
                if(state.items.vanillaIceCreamObj.quantity === 0){
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
                if(state.items.twoLiterSpriteObj.quantity === 0){
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
                if(state.items.spriteCanObj.quantity === 0){
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
                if(state.items.twoLiterCokeObj.quantity === 0){
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
                if(state.items.cokeCanObj.quantity === 0){
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
                if(state.items.twoLiterDietCokeObj.quantity === 0){
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
                if(state.items.dietCokeCanObj.quantity === 0){
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
                if(state.items.twoLiterFantaObj.quantity === 0){
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
                if(state.items.fantaCanObj.quantity === 0){
                    delete state.items.fantaCanObj;
                }
            }

        },
        addDealToCart:(state,action)=>{

        },
        checkOut:(state, action) =>{

        },
        calculateCartTotal: (state, action) => {
            let cartTotal = 0;


        }  
    }
})

export const { addItemToCart, updateQuantity,addDealToCart, checkOut, calculateCartTotal} = cartSlice.actions;
export default cartSlice.reducer;