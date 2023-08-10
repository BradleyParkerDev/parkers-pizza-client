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



// Pizzas
const deepDishObj = {
    cartQuantity: 0,
    type: 'pizza',
    name: 'Deep Dish Pizza',
    image: deepDish,
    imageHeight:'117.4px',
    imageWidth:'122px',
    price: 12.50,
    imageMarginTop: '10.05px'

}
const handTossedObj = {
    cartQuantity: 0,
    type: 'pizza',
    name: 'Hand Tossed Pizza',
    image: handTossed,
    imageHeight:'125px',
    imageWidth:'125px',
    price: 10,
    imageMarginTop: '10.05px'

}
const thinCrustObj = {
    cartQuantity: 0,
    type: 'pizza',
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

// Sides
const hotWingsObj = {
    cartQuantity: 0,
    type: 'side',
    name: '12 Piece Hot Wings',
    image: hotWings,
    imageHeight:'115px',
    imageWidth:'170px',
    price: 12,
    imageMarginTop: '12.05px'

}
const breadSticksObj = {
    cartQuantity: 0,
    type: 'side',
    name: 'Bread Sticks',
    image: breadSticks,
    imageHeight:'106.8px',
    imageWidth:'170px',
    price: 5,
    imageMarginTop: '24.05px'

}
const mozzarellaSticksObj = {
    cartQuantity: 0,
    type: 'side',
    name: 'Mozzarella Sticks',
    image: mozzarellaSticks,
    imageHeight:'105.47px',
    imageWidth:'170px',
    price: 5,
    imageMarginTop: '19.05px'

}
const calamariObj = {
    cartQuantity: 0,
    type: 'side',
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

// Desserts
const chocolateCakeObj = {
    cartQuantity: 0,
    type: 'dessert',
    name: 'Chocolate Cake',
    image: chocolateCake,
    imageHeight:'128px',
    imageWidth:'128px',
    price: 6,
    imageMarginTop: '7.05px'

}
const chocolateChipCookieObj = {
    cartQuantity: 0,
    type: 'dessert',
    name: 'Chocolate Chip Cookie',
    image: chocolateChipCookie,
    imageHeight:'105.01px',
    imageWidth:'103px',
    price: 1.50,
    imageMarginTop: '18.05px'

}
const vanillaIceCreamObj = {
    cartQuantity: 0,
    type: 'dessert',
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

// Beverages
const twoLiterSpriteObj = {
    cartQuantity: 0,
    type: 'beverage',
    name: '2 Liter Sprite',
    image: spriteTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'50px',
    price: 2.50,
    imageMarginTop: '6.05px'

}
const spriteCanObj = {
    cartQuantity: 0,
    type: 'beverage',
    name: 'Sprite Can',
    image: spriteCan,
    imageHeight:'90px',
    imageWidth:'49.93px',
    price: 1,
    imageMarginTop: '27.05px'

}
const twoLiterCokeObj = {
    cartQuantity: 0,
    type: 'beverage',
    name: '2 Liter Coke',
    image: cokeTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'40.47px',
    price: 2.50,
    imageMarginTop: '6.05px'

}
const cokeCanObj = {
    cartQuantity: 0,
    type: 'beverage',
    name: 'Coke Can',
    image: cokeCan,
    imageHeight:'90px',
    imageWidth:'60.15px',
    price: 1,
    imageMarginTop: '27.05px'

}
const twoLiterDietCokeObj = {
    cartQuantity: 0,
    type: 'beverage',
    name: '2 Liter Diet Coke',
    image: dietCokeTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'41.14px',
    price: 2.50,
    imageMarginTop: '6.05px'

}
const dietCokeCanObj = {
    cartQuantity: 0,
    type: 'beverage',
    name: 'Diet Coke Can',
    image: dietCokeCan,
    imageHeight:'90px',
    imageWidth:'47.71px',
    price: 1,
    imageMarginTop: '27.05px'

}
const twoLiterFantaObj = {
    cartQuantity: 0,
    type: 'beverage',
    name: '2 Liter Fanta',
    image: fantaTwoLiter,
    imageHeight:'121.67px',
    imageWidth:'41.66px',
    price: 2.50,
    imageMarginTop: '6.05px'

}
const fantaCanObj = {
    cartQuantity: 0,
    type: 'beverage',
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
    // dateCreated: Date,

    cartSideItems,
    cartDessertItems,
    cartBeverageItems,
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

export const { addItemToCart, updateQuantity, checkOut} = cartSlice.actions;
export default cartSlice.reducer;