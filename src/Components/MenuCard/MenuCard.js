import minus from './minus.png'
import plus from './plus.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, updateQuantity,setCart,checkLastItem, calculateCartTotal } from '../../Redux/cartSlice'
import { setUserCart } from '../../Redux/usersSlice'
// import { checkLocalCart } from '../../Lib/checkLocalCart'
const MenuCard = (props) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(0);
    const [inCart, setInCart] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const cart = useSelector((state)=>state.cart)
    const user = useSelector((state)=>state.users)
    const auth = useSelector((state)=>state.auth.isAuth)

    // console.log(cart)
    const {
        pizza,
        beverage,
        dessert,
        side,
    } = props


    //Quantity Change
    const handleQuantityChange = (change, itemObj) => {
        if(change === 'decrease'  && quantity > 1){
            setQuantity(quantity-1)            
        }
        if(change === 'increase'  && quantity < 10){
            setQuantity(quantity+1)
        }
        if(change === 'remove'){
            setQuantity(0)
        }
        if(change === 'decrease' && quantity === 1){
            setInCart(false)
            setQuantity(0)
        }
        if(change === 'add' && quantity === 0){
            setInCart(true)
            setQuantity(1)
        }
        if(change === 'add'){
            let payload = {
                type: change,
                name: itemObj.name
            }
            dispatch(addItemToCart(payload))
        }
        if(change === 'increase'){
            let payload = {
                type: change,
                name: itemObj.name
            }
            dispatch(updateQuantity(payload))
        }
        if(change === 'decrease'){
            let payload = {
                type: change,
                name: itemObj.name
            }
            dispatch(updateQuantity(payload))
        }

    }


    // Sets card quantity to cart item quantity
    const checkCartStatusQuantity = () =>{


        if(side){
            for (const key in cart.items) {
                if(cart.items[key].name === side.name){
                    setInCart(true)
                    setQuantity(cart.items[key].quantity)
                }
      
            }            
        }
        if(dessert){
            for (const key in cart.items) {
                if(cart.items[key].name === dessert.name){
                    setInCart(true)
                    setQuantity(cart.items[key].quantity)
                }
     
            }            
        }
        if(beverage){
            for (const key in cart.items) {
                if(cart.items[key].name === beverage.name){
                    setInCart(true)
                    setQuantity(cart.items[key].quantity)
                }    
            }            
        }

    }

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

    useEffect(()=>{
        checkCartStatusQuantity()
        dispatch(checkLastItem())
        {(Object.entries(cart.items).length > 0 && auth === false)&& setLocalCart()}
        {(Object.entries(cart.items).length === 0 && auth === false)&& getLocalCart()}
        dispatch(calculateCartTotal())
        {auth && dispatch(setUserCart(cart))}
    },[cart,auth])




    const showViewButton = () =>{   
        return(
            <div id='view-button' className="mt-[8px] ml-[10px] flex justify-center w-[50px] h-[30px] rounded-[5px] bg-red-pp">
                <p onClick={()=>{navigate('/pizza-builder')}} style={{fontSize:'14px', lineHeight:'14px'}} className="mt-[7px]  font-sergioTrendy text-white">View</p>
            </div>                
        )  
    }

    const showAddQuantity = () =>{
        
        if(!inCart){
            return(

            <div>
            {side && <div onClick={()=>{handleQuantityChange('add',side)}} id='add-button' className="mt-[8px] ml-[10px] flex justify-center w-[50px] h-[30px] rounded-[5px] bg-red-pp"><p style={{fontSize:'14px', lineHeight:'14px'}} className="mt-[7px]  font-sergioTrendy text-white">Add</p></div>}
            {dessert && <div onClick={()=>{handleQuantityChange('add', dessert)}} id='add-button' className="mt-[8px] ml-[10px] flex justify-center w-[50px] h-[30px] rounded-[5px] bg-red-pp"><p style={{fontSize:'14px', lineHeight:'14px'}} className="mt-[7px]  font-sergioTrendy text-white">Add</p></div>}   
            {beverage && <div onClick={()=>{handleQuantityChange('add', beverage)}} id='add-button' className="mt-[8px] ml-[10px] flex justify-center w-[50px] h-[30px] rounded-[5px] bg-red-pp"><p style={{fontSize:'14px', lineHeight:'14px'}} className="mt-[7px]  font-sergioTrendy text-white">Add</p></div>}   

            
            
            
            </div>
               
            )
        }else{
            return(
                <div id='quantity-container' className='flex w-[70px] h-[50px] rounded-br-[20px]'>    
                        {/* Decrease Buttons */}
                        {side && <div onClick={()=>{handleQuantityChange('decrease', side)}} id='minus-button' className='mt-[11px]'><img src={minus} className='h-[15px] w-[15px]'/></div>}
                        {dessert && <div onClick={()=>{handleQuantityChange('decrease', dessert)}} id='minus-button' className='mt-[11px]'><img src={minus} className='h-[15px] w-[15px]'/></div>}
                        {beverage && <div onClick={()=>{handleQuantityChange('decrease', beverage)}} id='minus-button' className='mt-[11px]'><img src={minus} className='h-[15px] w-[15px]'/></div>}
                        
                        {/* Quantity Number */}
                        {/* {side && <div id ='quantity-number' className='ml-[7px] mr-[7px] flex justify-center border-black border-solid border-[1px] rounded-[3px] w-[25px] h-[35px]'><p style={{fontSize:'16px', lineHeight:'16px'}} className='mt-[9px] font-sergioTrendy'>{side.quantity} </p></div>}
                        {dessert && <div id ='quantity-number' className='ml-[7px] mr-[7px] flex justify-center border-black border-solid border-[1px] rounded-[3px] w-[25px] h-[35px]'><p style={{fontSize:'16px', lineHeight:'16px'}} className='mt-[9px] font-sergioTrendy'>{dessert.quantity} </p></div>}
                        {beverage && <div id ='quantity-number' className='ml-[7px] mr-[7px] flex justify-center border-black border-solid border-[1px] rounded-[3px] w-[25px] h-[35px]'><p style={{fontSize:'16px', lineHeight:'16px'}} className='mt-[9px] font-sergioTrendy'>{beverage.quantity} </p></div>}
                         */}
                        {<div id ='quantity-number' className='ml-[7px] mr-[7px] flex justify-center border-black border-solid border-[1px] rounded-[3px] w-[25px] h-[35px]'><p style={{fontSize:'16px', lineHeight:'16px'}} className='mt-[9px] font-sergioTrendy'>{quantity} </p></div>}

                        {/* Increase Buttons */}
                        {side && <div onClick={()=>{handleQuantityChange('increase', side)}} id='plus-button' className='mt-[11px]'><img src={plus} className='h-[15px] w-[15px]'/></div>}
                        {dessert && <div onClick={()=>{handleQuantityChange('increase', dessert)}} id='plus-button' className='mt-[11px]'><img src={plus} className='h-[15px] w-[15px]'/></div>}
                        {beverage && <div onClick={()=>{handleQuantityChange('increase', beverage)}} id='plus-button' className='mt-[11px]'><img src={plus} className='h-[15px] w-[15px]'/></div>}
                </div>
            )
        }
    }
    
    return(
        <div id='menu-card-outer-container' className="w-[235px] h-[215px] p-[5px] mr-[30px] bg-grey-pp rounded-[20px]">
            <div id='menu-card-inner-container' className="h-full w-full bg-white rounded-[20px]">
                
                {/* Upper Card Area */}
                <div id='upper-card-area' className="flex justify-center h-[140px] w-full rounded-tl-[20px] rounded-tr-[20px]">
                    {pizza && <img style={{height:`${pizza.imageHeight}`, width:`${pizza.imageWidth}`,marginTop:`${pizza.imageMarginTop}`}} src={pizza.image}/>}                 
                    {side && <img style={{height:`${side.imageHeight}`, width:`${side.imageWidth}`,marginTop:`${side.imageMarginTop}`}} src={side.image}/>}                 
                    {dessert && <img style={{height:`${dessert.imageHeight}`, width:`${dessert.imageWidth}`,marginTop:`${dessert.imageMarginTop}`}} src={dessert.image}/>}                 
                    {beverage && <img style={{height:`${beverage.imageHeight}`, width:`${beverage.imageWidth}`,marginTop:`${beverage.imageMarginTop}`}} src={beverage.image}/>}
                </div>

                {/* Lower Card Area */}
                <div id='lower-card-area' className="h-[65px] w-full rounded-bl-[20px] rounded-br-[20px]">
                    <div id='card-title' className="h-[15px] w-full flex justify-center">
                        <p style={{fontSize:'14px', lineHeight:'14px'}}  className="font-sergioTrendy">
                            {pizza && `${pizza.name}`}                           
                            {side && `${side.name}`}                           
                            {dessert && `${dessert.name}`}                           
                            {beverage && `${beverage.name}`}
                        </p>
                    </div>
                    <div id='card-price-button' className="flex ">

                        {/* Card Price Container */}
                        <div id='card-price-container' className="w-[155px] h-[50px] rounded-bl-[20px] flex justify-end">
                            <div id='card-price' className="flex mt-[9px]">
                                <div id='dollar-sign' >
                                    <p style={{fontSize:'24px', lineHeight:'24px'}} className="mr-[4px]">$</p>
                                </div>
                                <div id='price'>
                                    <p style={{fontSize:'24px', lineHeight:'24px'}} className="mr-[10px] font-sergioTrendy">
                                        {pizza && `${pizza.price.toFixed(2)}`}                                        
                                        {side && `${side.price.toFixed(2)}`}                                        
                                        {dessert && `${dessert.price.toFixed(2)}`}
                                        {beverage && `${beverage.price.toFixed(2)}`}
                                    </p>
                                </div>
                                {/* Pizza Asterisk */}
                                {pizza && <div id='asterisk'> <p style={{fontSize:'24px', lineHeight:'24px', fontFamily:'Arial'}} className="ml-[0px]">*</p> </div>}
                            </div>
                        </div>

                        {/* Card Button Container */}
                        <div id='card-button-container' className="w-[70px] h-[50px] rounded-br-[20px]">
                            {pizza && showViewButton()}
                            {!pizza && showAddQuantity()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard;


