import minus from './minus.png'
import plus from './plus.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MenuCard = (props) =>{
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1);
    const [inCart, setInCart] = useState(true)
    const user = useSelector((state)=>state.users)

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
        if(quantity === 0){
            setInCart(false)
            
        }

    }

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
            <div onClick={''} id='view-button' className="mt-[8px] ml-[10px] flex justify-center w-[50px] h-[30px] rounded-[5px] bg-red-pp">
                <p style={{fontSize:'14px', lineHeight:'14px'}} className="mt-[7px]  font-sergioTrendy text-white">Add</p>
            </div>                
            )
        }else{
            return(
                <div id='quantity-container' className='flex h-[35px] w-[67px] border-black border-[1px] border-dashed'>
                        <div id='minus-button'>
                            <img src={minus} className='h-[15px] w-[15px]'/>
                        </div>
                        <div onClick={()=>{handleQuantityChange('decrease')}} id ='quantity-number'>
                            {quantity}
                        </div>
                        <div onClick={()=>{handleQuantityChange('increase')}} id='plus-button'>
                            <img src={plus} className='h-[15px] w-[15px]'/>
                        </div>
                </div>
            )
        }
    }
    
    return(
        <div id='menu-card-outer-container' className="w-[235px] h-[215px] p-[5px] bg-grey-pp rounded-[20px]">
            <div id='menu-card-inner-container' className="h-full w-full bg-white rounded-[20px]">
                
                {/* Upper Card Area */}
                <div id='upper-card-area' className="h-[140px] w-full rounded-tl-[20px] rounded-tr-[20px] border-black border-[1px] border-dashed">

                </div>

                {/* Lower Card Area */}
                <div id='lower-card-area' className="h-[65px] w-full rounded-bl-[20px] rounded-br-[20px] border-black border-[1px] border-dashed">
                    <div id='card-title' className="h-[15px] w-full flex justify-center border-black border-[1px] border-dashed">
                        <p style={{fontSize:'14px', lineHeight:'14px'}}  className="font-sergioTrendy">Deep Dish Pizza</p>
                    </div>
                    <div id='card-price-button' className="flex ">

                        {/* Card Price Container */}
                        <div id='card-price-container' className="w-[155px] h-[50px] rounded-bl-[20px] flex justify-end border-black border-[1px] border-dashed">
                            <div id='card-price' className="flex mt-[9px]">
                                <div id='dollar-sign' >
                                    <p style={{fontSize:'24px', lineHeight:'24px'}} className="mr-[4px]">$</p>
                                </div>
                                <div id='price'>
                                    <p style={{fontSize:'24px', lineHeight:'24px'}} className="font-sergioTrendy">7.50</p>
                                </div>
                                <div id='asterisk'>
                                    <p style={{fontSize:'24px', lineHeight:'24px', fontFamily:'Arial'}} className="ml-[4px]">*</p>
                                </div>
                            </div>
                        </div>

                        {/* Card Button Container */}
                        <div id='card-button-container' className="w-[70px] h-[50px] rounded-br-[20px] border-black border-[1px] border-dashed">
                            {/* {showViewButton()} */}
                            {showAddQuantity()}
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )



}

export default MenuCard;