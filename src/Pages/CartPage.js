import Footer from "../Components/Footer/Footer";
import CartOrderCard from "../Components/CartOrderCard/CartOrderCard";


const CartPage = () =>{
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
                        <CartOrderCard/>

                        <CartOrderCard/>

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
                    <div id='delivery' className="w-[195px] h-[195px] border-black border-dashed border-[1px]">

                    </div>
                    <div id='pickup' className="w-[195px] h-[195px] border-black border-dashed border-[1px]">
                        
                    </div>
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