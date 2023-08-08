import minus from './minus.png'
import plus from './plus.png'
import trash from './trash.png'
import breadSticks from '../../MenuImages/Breadsticks.png'
import calamari from '../../MenuImages/Calamari.png'
import chocolateCake from '../../MenuImages/chocolate cake.png'
import chocolateChipCookie from '../../MenuImages/chocolate chip cookie.png'
import cokeTwoLiter from '../../MenuImages/Coke 2 Liter.png'
import cokeCan from '../../MenuImages/Coke Can.png'
import deepDish from '../../MenuImages/deep dish.png'
import dietCokeTwoLiter from '../../MenuImages/Diet Coke 2 Liter.png'
import dietCokeCan from '../../MenuImages/Diet Coke Can.png'
import fantaTwoLiter from '../../MenuImages/Fanta 2 liter.png'
import fantaCan from '../../MenuImages/Fanta Can.png'
import handTossed from '../../MenuImages/Hand Tossed.png'
import hotWings from '../../MenuImages/Hotwings.png'
import mozzarellaSticks from '../../MenuImages/Mozzarella Sticks.png'
import spriteTwoLiter from '../../MenuImages/Sprite 2 Liter.png'
import spriteCan from '../../MenuImages/Sprite Can.png'
import thinCrust from '../../MenuImages/Thin crust.png'
import vanillaIceCream from '../../MenuImages/Vanilla Ice Cream.png'


import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'





const CartOrderCard = () =>{

    const [quantity, setQuantity] = useState(1);


    const handleQuantityChange = (change) => {

        if(change === 'decrease'  && quantity > 0){
            setQuantity(quantity-1)
        }
        if(change === 'increase'  && quantity < 10){
            setQuantity(quantity+1)
        }
        if(change === 'remove'){
            setQuantity(0)
        }

    }

    return(
        <div id='cart-order-card-container' className=" md:flex font-sergioTrendy border-solid border-black border-[1px] rounded-[5px] w-[342px] md:w-[100%] h-[250px] md:h-[160px] mb-[9px] p-[10px] md:p-[0px]">
            <div id="coc-div-1" className="flex h-[160px] md:h-[100%] w-[100%] ">
                <div id='coc-image-div' className="h-[auto] w-[160px] ">
                    <img className='w-[159px] h-[153px]' src={deepDish}/>
                </div>
                <div id='coc-title-details-price-div' className='md:flex ml-[10px] md:ml-[15px]' >
                    <div id='coc-title-details' className=' md:w-[175px] w-[140px] h-[110px] '>
                        <div id='coc-item-title' className='mt-[20px]'>
                            <p>
                                Deep Dish Pizza
                            </p>
                        </div>
                        <div id='coc-item-details' className='mt-[5px]'>
                            <p>Details</p>
                        </div>
                        
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
                                    <p>15.00</p>

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
                                <img onClick={()=>{handleQuantityChange('decrease')}} className='mt-[11px] h-[15px] w-[15px] md:h-[20px] md:w-[20px]' src={minus}/>

                            </div>
                            <div id='quantity-amount' className="flex md:h-[50px] md:w-[35px] pt-[5px] md:pt-[10px] justify-center ml-[9px] mr-[9px] w-[25px] h-[40px] border-solid border-black border-[1px]">
                                <p>{quantity}</p>
                            </div>
                            <div id='increase-div'className="w-[15px] h-[100%] md:h-[auto] md:w-[auto]">
                                <img onClick={()=>{handleQuantityChange('increase')}} className='mt-[11px] h-[15px] w-[15px] md:h-[20px] md:w-[20px]' src={plus}/>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                <div id='coc-remove-div' className='flex md:ml-[35px] justify-end h-[100%] w-[162px] md:w-[auto] '>
                    <img onClick={()=>{handleQuantityChange('remove')}} className='mt-[30px] md:mt-[50px] h-[30px] w-[30px] md:h-[40px] md:w-[40px]' src={trash}/>
                </div>
            </div>
        </div>
    )

}

export default CartOrderCard