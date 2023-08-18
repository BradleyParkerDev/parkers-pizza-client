import minus from './minus.png'
import plus from './plus.png'
import trash from './trash.png'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    setCart,
    updatePizzaQuantity,
    removePizzaFromCart,
    updateQuantity, 
    checkLastItem ,
    removeItemFromCart, 
    calculateCartTotal 
} from '../../Redux/cartSlice'
import { useNavigate } from 'react-router-dom'





const CartOrderCard = (props) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const cart = useSelector((state)=>state.cart)
    const auth = useSelector((state)=>state.auth.isAuth)

    console.log(cart)

    const {
        cartItem
    } = props;

    const [quantity, setQuantity] = useState(cartItem.quantity);

    const handlePizzaQuantityChange = (change, pizzaObj) =>{

        if(change === 'decrease'){
            let payload = {
                type: change,
                pizzaId: pizzaObj.pizzaId
            }                
            dispatch(updatePizzaQuantity(payload))

        }
        if(change === 'increase'){
            let payload = {
                type: change,
                pizzaId: pizzaObj.pizzaId
            }
            dispatch(updatePizzaQuantity(payload))

        }
        if(change === 'remove'){
            let payload = {
                type: change,
                pizzaId: pizzaObj.pizzaId
            }
            dispatch(removePizzaFromCart(payload))

        }
    }



    const handleQuantityChange = (change, cartItemObj) => {
        if(change === 'decrease'  && quantity > 0){
            setQuantity(quantity-1)
        }
        if(change === 'increase'  && quantity < 10){
            setQuantity(quantity+1)

        }
        if(change === 'increase'){
            let payload = {
                type: change,
                name: cartItemObj.name
            }
            dispatch(updateQuantity(payload))
        }
        if(change === 'decrease'){
            let payload = {
                type: change,
                name: cartItemObj.name
            }
            dispatch(updateQuantity(payload))
        }
        if(change === 'remove'){
            let payload = {
                type: change,
                name: cartItemObj.name
            }
            dispatch(removeItemFromCart(payload))
            setQuantity(0)
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
        // checkCartStatusQuantity()
        // dispatch(checkLastItem())
        // {(Object.entries(cart.items).length > 0 && auth === false)&& setLocalCart()}
        // {(Object.entries(cart.items).length === 0 && auth === false)&& getLocalCart()}
        dispatch(calculateCartTotal())
    },[cart])

    return(
        <div id='cart-order-card-container' className=" md:flex font-sergioTrendy border-solid border-black border-[1px] rounded-[5px] w-[342px] md:w-[100%] h-[250px] md:h-[160px] mb-[9px] p-[10px] md:p-[0px]">
            <div id="coc-div-1" className="flex h-[160px] md:h-[100%] w-[100%] ">
                <div id='coc-image-div' className="flex justify-center h-[auto] w-[170px]">
                    {<img style={{marginTop:'21px', height:`${cartItem.imageHeight}`, width:`${cartItem.imageWidth}`}} className='' src={cartItem.image}/>}
                </div>

                <div id='coc-title-details-price-div' className='md:flex ml-[10px] md:ml-[15px]' >
                    <div id='coc-title-details' className=' md:w-[175px] w-[140px] h-[110px] '>
                        <div id='coc-item-title' className='mt-[20px]'>
                            <p>

                                {cartItem.name}
                            </p>
                        </div>
                        {cartItem.isPizza && <div id='coc-item-details' className='mt-[5px]'><p>Details</p></div>}
                    </div>

                    <div id="coc-price" className='md:mt-[20px]  md:w-[80px]'>
                        <div  id="price-inner-container" style={{fontSize:'16px', lineHeight:'16px'}} className=''>
                            <div id="price-text" className='md:flex md:pt-[5px] md:justify-center w-[70px] font-sergioTrendy '>
                                <p>Price</p>
                            </div>
                            <div id="total-amount" className='flex md:justify-center md:mt-[35px]'>
                                <div style={{lineHeight:'16px'}} className='font-sans mr-[3px] '>
                                    <p>$</p>

                                </div>
                                <div className=' pt-[4px] md:pt-[0px] font-sergioTrendy h-[24px] '>
                                    {<p>{cartItem.price.toFixed(2)}</p>}

                                </div>                            
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div id="coc-div-2" className=" flex mt-[5px] md:ml-[15px] md:mt-[20px] h-[65px] md:h-[100%] w-[100%] ">
                <div id='coc-quantity-div' className="w-[160px] md:w-[110px] ">
                    <div id='coc-quantity-title' className="flex md:pb-[14px] justify-center  ">
                        <p>Quantity</p>
                    </div>
                    <div id='coc-quantity-update-container' className="flex  justify-center md:h-[auto] h-[40px] ">
                        <div id="coc-quantity-update" className="flex w-[75px] md:w-[auto] md:h-[auto] h-[40px] ">
                            <div id='decrease-div' className="w-[15px] h-[100%] md:h-[auto] md:w-[auto]">
                                {!cartItem.isPizza && <img onClick={()=>{handleQuantityChange('decrease',cartItem)}} className='mt-[11px] h-[15px] w-[15px] md:h-[20px] md:w-[20px]' src={minus}/>}
                                {cartItem.isPizza && <img onClick={()=>{handlePizzaQuantityChange('decrease', cartItem)}} className='mt-[11px] h-[15px] w-[15px] md:h-[20px] md:w-[20px]' src={minus}/>}

                            </div>
                            <div id='quantity-amount' className="flex md:h-[50px] md:w-[35px] pt-[5px] md:pt-[10px] justify-center ml-[9px] mr-[9px] w-[25px] h-[40px] border-solid border-black border-[1px]">
                                { <p>{cartItem.quantity}</p>}
                            </div>
                            <div id='increase-div'className="w-[15px] h-[100%] md:h-[auto] md:w-[auto]">
                                {!cartItem.isPizza && <img onClick={()=>{handleQuantityChange('increase', cartItem)}} className='mt-[11px] h-[15px] w-[15px] md:h-[20px] md:w-[20px]' src={plus}/>}
                                {cartItem.isPizza && <img onClick={()=>{handlePizzaQuantityChange('increase', cartItem)}} className='mt-[11px] h-[15px] w-[15px] md:h-[20px] md:w-[20px]' src={plus}/>}
                            </div>
                        </div>
                    </div>
                </div>
                <div id='coc-remove-div' className='flex md:ml-[35px] justify-end h-[100%] w-[162px] md:w-[auto] '>
                    {!cartItem.isPizza && <img onClick={()=>{handleQuantityChange('remove', cartItem)}} className='mt-[30px] md:mt-[50px] h-[30px] w-[30px] md:h-[40px] md:w-[40px]' src={trash}/>}
                    {cartItem.isPizza && <img onClick={()=>{handlePizzaQuantityChange('remove', cartItem)}} className='mt-[30px] md:mt-[50px] h-[30px] w-[30px] md:h-[40px] md:w-[40px]' src={trash}/>}
                </div>
            </div>
        </div>
    )

}

export default CartOrderCard