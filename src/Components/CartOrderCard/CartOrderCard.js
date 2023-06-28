import minus from './minus.png'
import plus from './plus.png'
import trash from './trash.png'




import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'





const CartOrderCard = () =>{

    const [quantity, setQuantity] = useState(0);


    const handleQuantityChange = (change) => {

        if(change === 'decrease'  && quantity > 0){
            setQuantity(quantity-1)
        }
        if(change === 'increase'  && quantity < 10){
            setQuantity(quantity+1)
        }

    }

    return(
        <div id='cart-order-card-container' className=" md:flex font-sergioTrendy border-solid border-black border-[1px] rounded-[5px] w-[342px] md:w-[100%] h-[250px] md:h-[160px] mb-[9px] p-[10px]">
            <div id="coc-div-1" className="flex h-[160px] md:h-[100%] w-[100%] border-dashed border-black border-[1px]">
                <div id='coc-image-div' className="h-[auto] w-[160px] border-dashed border-black border-[1px]">

                </div>
                <div id='coc-details-price-div' >
                    <div id='coc-details'>

                    </div>
                    <div id="coc-price">

                    </div>

                </div>
            </div>
            <div id="coc-div-2" className="mt-[5px] md:mt-[0px] h-[65px] md:h-[100%] w-[100%] border-dashed border-black border-[1px]">
                <div id='coc-quantity-div' className="w-[160px] border-dashed border-black border-[1px]">
                    <div id='coc-quantity-title' className="flex md:pb-[14px] justify-center  border-dashed border-black border-[1px]">
                        <p>Quantity</p>
                    </div>
                    <div id='coc-quantity-update-container' className="flex justify-center h-[40px] border-dashed border-black border-[1px]">
                        <div id="coc-quantity-update" className="flex w-[75px] h-[40px] border-dashed border-black border-[1px]">
                            <div id='decrease-div'>
                                <img onClick={()=>{handleQuantityChange('decrease')}} className='mt-[11px] h-[15px] w-[15px]' src={minus}/>

                            </div>
                            <div id='quantity-amount' className="flex pt-[5px] justify-center ml-[9px] mr-[9px] w-[25px] h-[40px] border-solid border-black border-[1px]">
                                <p>{quantity}</p>
                            </div>
                            <div id='increase-div'className="w-[15px] h-[100%]">
                                <img onClick={()=>{handleQuantityChange('increase')}} className='mt-[11px] h-[15px] w-[15px]' src={plus}/>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                <div id='coc-remove-div'>

                </div>
            </div>
        </div>
    )

}

export default CartOrderCard