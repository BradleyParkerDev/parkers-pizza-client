import MenuCard from "../Components/MenuCard/MenuCard"
import { pizzas, sides, desserts,beverages } from "../Redux/cartSlice"
import { setCart, checkCartStatus,calculateCartTotal } from "../Redux/cartSlice";
import { setUserCart } from "../Redux/usersSlice";
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from "react";

const MenuPage = (props) =>{
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart)

    //Sets local storage cart to contents from cart slice
    const setLocalCart = () =>{
        localStorage.setItem('localCart', JSON.stringify(cart))
    }

    //Gets cart slice items from local storage
    const getLocalCart = () =>{
        let localCart = localStorage.getItem('localCart')
        if(localCart){
            dispatch(setCart(JSON.parse(localCart)))  
            console.log(JSON.parse(localCart))
        }
    } 

    
    // useEffect(()=>{
    //     // checkCartStatusQuantity()
    //     dispatch(checkCartStatus())
    //     {(cart.itemsInCart === true && cart.userLoggedIn === false) && setLocalCart()}
    //     {(cart.itemsInCart === false && cart.userLoggedIn === false) && getLocalCart()}
    //     dispatch(calculateCartTotal())
    //     {cart.userLoggedIn && dispatch(setUserCart(cart))}
    // },[cart])




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