import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDealToCart } from '../../Redux/cartSlice'

const DealCard = (props) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const cart = useSelector((state)=>state.cart)
    const user = useSelector((state)=>state.users)

    return(
      <div id='deal-card-outer-container' className='bg-grey-pp p-[5px] min-h-[211px] min-w-[357px] rounded-[20px]'>
        <div id='deal-card-inner-container' className='bg-white w-full h-full rounded-[20px]'>
            deal
        </div>
      </div>
    )
}

export default DealCard;