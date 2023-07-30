import { Navigate } from "react-router-dom";

const OrderHistoryCard = () =>{

    






    return(
        <div id = 'OHC-Container' className="flex justify-evenly w-[340px] h-[61px] md:w-[659px] md:h-[62px] border-solid border-[1px] border-black rounded-[5px] mb-[9px] ">
            <div style={{fontSize:"14px"}} id = 'order-number' className="border-dashed border-[1px] border-[red] h-[100%] w-[33%]">
                <div id='order-number-div1' className="flex justify-center">
                    <p className="font-sergioTrendy underline mt-[8px]" >Order</p>
                </div>
                <div id='order-number-div2'>
                    <p className="flex justify-center">#1234...</p>
                </div>
            </div>
            <div style={{fontSize:"14px"}} id = 'order-date' className="border-dashed border-[1px] border-[red] h-[100%] w-[33%]">
                <div id='order-date-div1' className="flex justify-center">
                    <p  className="font-sergioTrendy underline mt-[8px]">Date</p>
                </div>
                <div id='order-date-div2'>
                    <p className="flex justify-center">05/22/23</p>
                </div>
            </div>
            <div id = 'view-order-button-container' className="flex justify-end border-dashed border-[1px] border-[red] h-[100%] w-[33%]">
                <div id='view-order-button' className="flex justify-center pt-[4px] md:pt-[4px] mt-[14px] mb-[14px] mr-[11px] border-solid border-[1px] rounded-[5px] border-black h-[33px] w-[106px] md:w-[113px]">
                    <p className="font-sergioTrendy font-bold text-[14px] md:text-[16px] border-black border-dashed border-[1px]">View Order</p>
                </div>
            </div>
        </div>
    )

}
export default OrderHistoryCard;