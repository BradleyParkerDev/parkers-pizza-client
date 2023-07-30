import CartOrderCard from "../Components/CartOrderCard/CartOrderCard";
import { useDispatch, useSelector } from 'react-redux'; 


const CartPage = () =>{
    const user = useSelector((state)=>state.users)

    return(
        // Page Container
        <div id="cartPage-container" className="w-full min-h-screen">
            <div id="cp-container-1" className="flex justify-center">
                <div id='cart-title' style={{fontSize:'32px', lineHeight:'32px'}} className="flex font-sergioTrendy mt-[38px] mb-[32px]">
                    <p>
                        Cart
                    </p>
                </div>
            </div>
            <div id="cp-container-2" className="flex justify-center">
                {/* Container for CartOrderCards */}
                <div id="cart-items-outer-container" className="w-[370px] md:w-[680px]  bg-grey-pp rounded-[5px] p-[6px] min-h-[300px] md:min-h-[170px] h-[auto]">
                    <div id="cart-items-inner-container" className="w-[full] bg-white rounded-[5px] p-[9px]  h-[100%]">
                    
                        <CartOrderCard/>













                    </div>
                </div>
            </div>
            <div id="cp-container-3" className="flex justify-center">
                    {/* Special Instructions */}
                    <div id="special-instructions-container" className='w-[370px] md:w-[680px]   border-black border-dashed border-[1px]'>
                        <div id="si-title" style={{fontSize:'16px', lineHeight:'16px'}} className='mb-[16px] mt-[31px] md:mt-[15px] font-sergioTrendy'>
                            <p>
                                Special Instructions
                            </p>
                        </div>
                        <textarea id="special-instructions" className='p-[5px] w-full h-[106px] border-solid border-black border-[1px]'/>
                    </div>
            </div>
            <div id="cp-container-4" className="flex justify-center ">
                <div id='orderType-checkout' className="w-[370px] md:w-[680px]  border-black border-dashed border-[1px]">
                    {/* Delivery */}
                    <div id='delivery' className="font-sergioTrendy  w-[100%] h-[195px] border-black border-dashed border-[1px]">
                        <div className='flex mb-[21px]' id='delivery-radio-line'>
                            <div id='delivery-radio' className="mr-[6px]">
                                <input name ='delivery-pickup' type='radio'/>
                            </div>
                            <div id='delivery-text'>
                                <p>Delivery</p>
                            </div>
                        </div>
                        <div id='user-delivery-name' className="mb-[17px]">
                            <p>Bradley Parker</p>
                        </div>
                        <div id='user-address'>
                            <div id='address-line-one'>
                                <p>5000 S East End Ave</p>
                            </div>
                            <div id='address-line-two'>
                                <p>Chicago, Illinois 60615</p>
                            </div>
                            <div id='delivery-phone-number'>
                                <p>312.555.5555</p>
                            </div>
                        </div>
                    </div>

                    {/* Pickup */}
                    <div id='pickup' className="font-sergioTrendy w-[100%] h-[195px] border-black border-dashed border-[1px]">
                        <div className='flex mb-[21px]' id='pickup-radio-line'>
                            <div id='pickup-radio' className="mr-[6px]">
                                <input name ='delivery-pickup' type='radio'/>
                            </div>
                            <div id='pickup-text'>
                                <p>Pickup</p>
                            </div>
                        </div> 
                        <div id = 'user-pickup-name' className="mb-[11px]">
                            <p>Bradley Parker</p>
                        </div> 
                        <div id='pickup-phone-number'>
                            <p>312.555.5555</p>
                        </div> 
                    </div>

                    {/* Checkout */}
                    <div id='checkout' className="w-[100%] flex justify-end border-black border-dashed border-[1px]">


                        <div >
                            {/* Total */}
                            <div style={{fontSize:'16px', lineHeight:'16px'}} id="total-div-row" className='mt-[16px] flex justify-center md:justify-end border-black border-dashed border-[1px]'>
                                <div id="total-outer-container" className=' flex justify-end '>
                                    <div  id="total-inner-container">
                                        <div id="total-text" className='w-[92px] font-sergioTrendy '>
                                            <p>Total</p>
                                        </div>
                                        <div id="total-amount" className='flex justify-end mt-[3px] '>
                                            <div className='font-sans mr-[3px] '>
                                                <p>$</p>

                                            </div>
                                            <div className=' pt-[4px] justify-end font-sergioTrendy h-[24px] '>
                                                <p>15.00</p>

                                            </div>                            
                                        </div>
                                    </div>
                                </div>                
                            </div>
                            {/* Add to Cart Button */}
                            <div style={{fontSize:'16px',lineHeight:'16px'}} id="button-div-row" className='mt-[22px] mb-[25px] border-black border-dashed border-[1px]'>
                                <div id="button-container" className='flex justify-end'>
                                    <div id="button" className='bg-red-pp w-[141px] h-[47px] rounded-[5px] font-sergioTrendy flex justify-center'>
                                        <p className='font-sergioTrendy text-white mt-[15px]'>
                                            Checkout
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>  
                    </div>
                </div>

            </div>
        </div>
    )

}

export default CartPage; 