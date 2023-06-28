import Footer from "../Components/Footer/Footer";
import CartOrderCard from "../Components/CartOrderCard/CartOrderCard";


const CartPage = () =>{
    return(
        // Page Container
        <div id="cartPage-container" className="w-full h-screen">
            <div id="cp-container-1" className="flex justify-center border-black border-dashed border-[1px]">
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
        </div>
    )

}

export default CartPage; 