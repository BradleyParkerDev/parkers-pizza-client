import MenuCard from "../Components/MenuCard/MenuCard"
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
const MenuPage = (props) =>{

    // Pizzas
    const deepDishObj = {
        type: 'pizza',
        name: 'Deep Dish Pizza',
        image: deepDish,
        imageHeight:'117.4px',
        imageWidth:'122px',
        price: 12.50,
        imageMarginTop: '10.05px'
    
    }
    const handTossedObj = {
        type: 'pizza',
        name: 'Hand Tossed Pizza',
        image: handTossed,
        imageHeight:'125px',
        imageWidth:'125px',
        price: 10,
        imageMarginTop: '10.05px'
    
    }
    const thinCrustObj = {
        type: 'pizza',
        name: 'Thin Crust Pizza',
        image: thinCrust,
        imageHeight:'122.64px',
        imageWidth:'122px',
        price: 7.50,
        imageMarginTop: '10.05px'
    }

    const pizzas = [
        deepDishObj,
        handTossedObj,
        thinCrustObj
    ]




    // Sides
    const hotWingsObj = {
        type: 'side',
        name: '12 Piece Hot Wings',
        image: hotWings,
        imageHeight:'115px',
        imageWidth:'170px',
        price: 12,
        imageMarginTop: '12.05px'
    
    }
    const breadSticksObj = {
        type: 'side',
        name: 'Bread Sticks',
        image: breadSticks,
        imageHeight:'106.8px',
        imageWidth:'170px',
        price: 5,
        imageMarginTop: '24.05px'
    
    }
    const mozzarellaSticksObj = {
        type: 'side',
        name: 'Mozzarella Sticks',
        image: mozzarellaSticks,
        imageHeight:'105.47px',
        imageWidth:'170px',
        price: 5,
        imageMarginTop: '19.05px'
    
    }
    const calamariObj = {
        type: 'side',
        name: 'Calamari',
        image: calamari,
        imageHeight:'127.32px',
        imageWidth:'170px',
        price: 7.5,
        imageMarginTop: '12.05px'
    
    }

    const sides = [
        hotWingsObj,
        breadSticksObj,
        mozzarellaSticksObj,
        calamariObj
    ]







    // Desserts
    const chocolateCakeObj = {
        type: 'dessert',
        name: 'Chocolate Cake',
        image: chocolateCake,
        imageHeight:'128px',
        imageWidth:'128px',
        price: 6,
        imageMarginTop: '7.05px'
    
    }
    const chocolateChipCookieObj = {
        type: 'dessert',
        name: 'Chocolate Chip Cookie',
        image: chocolateChipCookie,
        imageHeight:'105.01px',
        imageWidth:'103px',
        price: 1.50,
        imageMarginTop: '18.05px'
    
    }
    const vanillaIceCreamObj = {
        type: 'dessert',
        name: 'Vanilla Ice Cream',
        image: vanillaIceCream,
        imageHeight:'90px',
        imageWidth:'90px',
        price: 3,
        imageMarginTop: '28.05px'
    
    }

    const desserts = [
        chocolateCakeObj,
        chocolateChipCookieObj,
        vanillaIceCreamObj
    ]











    // Beverages
    const twoLiterSpriteObj = {
        type: 'beverage',
        name: '2 Liter Sprite',
        image: spriteTwoLiter,
        imageHeight:'121.67px',
        imageWidth:'50px',
        price: 2.50,
        imageMarginTop: '6.05px'
    
    }
    const spriteCanObj = {
        type: 'beverage',
        name: 'Sprite Can',
        image: spriteCan,
        imageHeight:'90px',
        imageWidth:'49.93px',
        price: 1,
        imageMarginTop: '27.05px'
    
    }
    const twoLiterCokeObj = {
        type: 'beverage',
        name: '2 Liter Coke',
        image: cokeTwoLiter,
        imageHeight:'121.67px',
        imageWidth:'40.47px',
        price: 2.50,
        imageMarginTop: '6.05px'
    
    }
    const cokeCanObj = {
        type: 'beverage',
        name: 'Coke Can',
        image: cokeCan,
        imageHeight:'90px',
        imageWidth:'60.15px',
        price: 1,
        imageMarginTop: '27.05px'
    
    }
    const twoLiterDietCokeObj = {
        type: 'beverage',
        name: '2 Liter Diet Coke',
        image: dietCokeTwoLiter,
        imageHeight:'121.67px',
        imageWidth:'41.14px',
        price: 2.50,
        imageMarginTop: '6.05px'
    
    }
    const dietCokeCanObj = {
        type: 'beverage',
        name: 'Diet Coke Can',
        image: dietCokeCan,
        imageHeight:'90px',
        imageWidth:'47.71px',
        price: 1,
        imageMarginTop: '27.05px'
    
    }
    const twoLiterFantaObj = {
        type: 'beverage',
        name: '2 Liter Fanta',
        image: fantaTwoLiter,
        imageHeight:'121.67px',
        imageWidth:'41.66px',
        price: 2.50,
        imageMarginTop: '6.05px'
    
    }
    const fantaCanObj = {
        type: 'beverage',
        name: 'Fanta Can',
        image: fantaCan,
        imageHeight:'90px',
        imageWidth:'47.36px',
        price: 1,
        imageMarginTop: '27.05px'
    
    }


    const beverages = [
        twoLiterSpriteObj,
        spriteCanObj,
        twoLiterCokeObj,
        cokeCanObj,
        twoLiterDietCokeObj,
        dietCokeCanObj,
        twoLiterFantaObj,
        fantaCanObj
    ]


    console.log(beverages)
    return(

        <div id="menu-container" className="w-full min-h-screen">
            <div id='menu-page-title' style={{fontSize:'32px', lineHeight:'32px'}} className="flex justify-center font-sergioTrendy mt-[26px] mb-[20px]">
                <p>Menu</p>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Pizza Row */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div id='pizzas' className="ml-[26px] md:ml-[45px] h-[300px] w-[auto]  ">
                <div id='pizza-title' className="font-sergioTrendy ">
                    <p>Pizzas</p>
                </div>
                <div id='pizza-row' className="flex  overflow-x-scroll mt-[21px] h-[220px] ">
                    {pizzas.map(pizza=>(<MenuCard pizza = {pizza}/>))}
                </div>

            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Sides Row */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div id='sides' className="ml-[26px] md:ml-[45px] h-[300px] w-[auto]  ">
                <div id='sides-title' className="font-sergioTrendy ">
                    <p>Sides</p>
                </div>
                <div id='sides-row'  className="flex overflow-x-scroll mt-[21px] h-[220px] ">
                    {sides.map(side=>(<MenuCard side = {side}/>))}
                </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Desserts Row */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div id='desserts' className="ml-[26px] md:ml-[45px] h-[300px] w-[auto]  ">
                <div id='desserts-title' className="font-sergioTrendy ">
                    <p>Desserts</p>
                </div>
                <div id='desserts-row'  className="flex overflow-x-scroll mt-[21px] h-[220px] ">
                    {desserts.map(dessert=>(<MenuCard dessert = {dessert}/>))}
                </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Beverages Row */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div id='beverages' className="ml-[26px] md:ml-[45px] h-[300px] w-[auto]  ">
                <div id='beverages-title' className="font-sergioTrendy ">
                    <p>Beverages</p>
                </div>
                <div id='beverages-row'  className="flex overflow-x-scroll mt-[21px] h-[220px] ">
                    {beverages.map(beverage=>(<MenuCard beverage = {beverage}/>))}
                </div>
            </div>
        </div>
    )
}

export default MenuPage;