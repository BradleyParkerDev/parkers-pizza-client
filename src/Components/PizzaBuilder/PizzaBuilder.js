import Left from './Left.png'
import Right from './Right.png'
import Whole from './Whole.png'
import handTossed from './handTossed.png'
import deepDish from './deepDish.png'
import thinCrust from './thinCrust.png'

import { 
    selectCrust, selectSize, 
    handleHam,handleBeef, handleSalami,
    handlePepperoni,handleItalianSausage,
    handleBacon, handleOnions, handleMushrooms, 
    handleBlackOlives, handleGreenPeppers, handleJalapenoPeppers, 
    handlePineapple,handleSpecialInstructions, calculateTotal, resetPizza   
} from '../../Redux/pizzaBuilderSlice'
import { addPizzaToCart, updatePizzaInCart ,calculateCartTotal, setCart, checkLastItem } from '../../Redux/cartSlice'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'; 

const PizzaBuilder = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state)=>state.auth.isAuth)

    const pizza = useSelector((state)=>state.pizza)
    const cart = useSelector((state)=>state.cart)
    const pizzas = useSelector((state)=>state.cart.pizzas.pizzasArr)

    //Crust
    const [crust, setCrust] = useState('Deep Dish')
    const [crustOneBg, setCrustOneBg] = useState('#D9D9D9')
    const [crustTwoBg, setCrustTwoBg] = useState('white')
    const [crustThreeBg, setCrustThreeBg] = useState('white')
    const [crustOneStyle, setCrustOneStyle] = useState('underline')
    const [crustTwoStyle, setCrustTwoStyle] = useState('none')
    const [crustThreeStyle, setCrustThreeStyle] = useState('none')

    //Size
    const [pizzaSize, setPizzaSize] = useState('Sm')
    const [sizeOneBg, setSizeOneBg] = useState('#D9D9D9')
    const [sizeTwoBg, setSizeTwoBg] = useState('white')
    const [sizeThreeBg, setSizeThreeBg] = useState('white')
    const [sizeOneStyle, setSizeOneStyle] = useState('underline')
    const [sizeTwoStyle, setSizeTwoStyle] = useState('none')
    const [sizeThreeStyle, setSizeThreeStyle] = useState('none')

    const [pizzaImage, setPizzaImage] = useState(deepDish)
    const [description, setDescription] = useState('')



    const [ham, setHam] = useState(null);
    const [beef, setBeef] = useState(null);
    const [salami, setSalami] = useState(null);
    const [pepperoni, setPepperoni] = useState(null);
    const [italianSausage, setItalianSausage] = useState(null);
    const [bacon, setBacon] = useState(null);



    const handleCrustChange = (crustType) => {
        if(crustType === 'Deep Dish'){
            dispatch(selectCrust(crustType))
            setCrustTwoBg('white')
            setCrustTwoStyle('none')
            setCrustThreeBg('white')
            setCrustThreeStyle('none')

            setCrust(crustType)     
            setCrustOneBg('#D9D9D9')
            setCrustOneStyle('underline')
            setPizzaImage(deepDish)

        }
        if(crustType === 'Hand Tossed'){
            dispatch(selectCrust(crustType))

            setCrustOneBg('white')
            setCrustOneStyle('none')
            setCrustThreeBg('white')
            setCrustThreeStyle('none')


            setCrust(crustType)
            setCrustTwoBg('#D9D9D9')
            setCrustTwoStyle('underline')
            setPizzaImage(handTossed)

        }
        if(crustType === 'Thin Crust'){
            dispatch(selectCrust(crustType))

            setCrustOneBg('white')
            setCrustOneStyle('none')
            setCrustTwoBg('white')
            setCrustTwoStyle('none')


            setCrust(crustType)
            setCrustThreeBg('#D9D9D9')
            setCrustThreeStyle('underline')
            setPizzaImage(thinCrust)

        }

        // console.log(pizza)
    }
    const handleSizeChange = (value) => {
        if(value === 'Sm'){
            dispatch(selectSize(value))

            setSizeTwoBg('white')
            setSizeTwoStyle('none')
            setSizeThreeBg('white')
            setSizeThreeStyle('none')

            setPizzaSize(value)     
            setSizeOneBg('#D9D9D9')
            setSizeOneStyle('underline')

        }
        if(value === 'Med'){
            dispatch(selectSize(value))

            setSizeOneBg('white')
            setSizeOneStyle('none')
            setSizeThreeBg('white')
            setSizeThreeStyle('none')


            setPizzaSize(value)
            setSizeTwoBg('#D9D9D9')
            setSizeTwoStyle('underline')

        }
        if(value === 'Lg'){
            dispatch(selectSize(value))

            setSizeOneBg('white')
            setSizeOneStyle('none')
            setSizeTwoBg('white')
            setSizeTwoStyle('none')


            setPizzaSize(value)
            setSizeThreeBg('#D9D9D9')
            setSizeThreeStyle('underline')
            

        }


        // console.log(pizzaSize)  
    }


    //Sets local storage cart to contents from cart slice
    const setLocalCart = () =>{
        localStorage.setItem('localCart', JSON.stringify(cart))
    }

    //Gets cart slice items from local storage
    const getLocalCart = () =>{
        let localCart = localStorage.getItem('localCart')
        console.log(JSON.parse(localCart))
        if(localCart){
            dispatch(setCart(JSON.parse(localCart)))   
        }
    } 

    useEffect(()=>{

        console.log(pizzas)
        dispatch(calculateTotal())
    },[pizza])





    const addPizza = () =>{

        dispatch(addPizzaToCart(pizza))
        dispatch(resetPizza())
        handleCrustChange('Deep Dish')
        handleSizeChange('Sm')

    }




    return(
        //
        <div id ="form-total-button">
            <div id="pb-form-outer-container" className='w-[355px] md:w-[680px] h-[1140px] md:h-[775px] bg-grey-pp rounded-[5px] p-[5px]'>
                <div id="pb-form-inner-container" className='w-full h-full pt-[22px] md:pt-[26px] bg-white rounded-[5px] '>

                    <div id="crust-size-container" className='md:flex md:ml-[32px] '>
                        
                        
                        
                        
                        {/* Crust */}
                        <div id="crust-container" className='  md:w-[385px] font-sergioTrendy ' >
                            <div id="crust-container" className='  md:w-[308px] font-sergioTrendy '>
                                <div id='crust-title' style={{fontSize:'24px', lineHeight:'24px'}} className='flex justify-center '>
                                    <p>
                                        Crust
                                    </p>
                                </div>
                                <div id='crusts' style={{fontSize:'14px', lineHeight:'14px'}} className='flex justify-evenly mt-[23px]'>
                                    <div style={{backgroundColor:`${crustOneBg}`, textDecoration:`${crustOneStyle}`}} onClick={()=>handleCrustChange('Deep Dish')} className=' rounded h-[16px]'>
                                        <p>Deep Dish</p>
                                    </div>
                                    <div style={{backgroundColor:`${crustTwoBg}`, textDecoration:`${crustTwoStyle}`}} onClick={()=>handleCrustChange('Hand Tossed')} className=' rounded h-[16px]'>
                                        <p>Hand Tossed</p>
                                    </div>
                                    <div style={{backgroundColor:`${crustThreeBg}`, textDecoration:`${crustThreeStyle}`}} onClick={()=>handleCrustChange('Thin Crust')} className=' rounded h-[16px]'>
                                        <p>Thin Crust</p>
                                    </div>
                                </div>                            
                            </div>

                            <div id="pb-pizza-image-outer-container"className='flex justify-center md:justify-end'>

                                <div id="pb-pizza-image" className='flex mb-[19px] justify-center w-auto h-auto  md:mt-[22px] mt-[29px]'>
                                    {crust === "Deep Dish" && <img src={pizzaImage} className="h-[128px] w-[122px] md:h-[153px] md:w-[159px]" />}
                                    {crust === "Hand Tossed" && <img src={pizzaImage} className="h-[121px] w-[122px] md:h-[153px] md:w-[159px]" />}
                                    {crust === "Thin Crust" && <img src={pizzaImage} className="h-[125px] w-[121px] md:h-[155px] md:w-[160px] md:ml-[10px]" />}

                                </div>                       
                            
                            </div>

                        </div>




                        {/* Size */}
                        <div id="size-outer-container" className='mb-[47px] md:ml-[61px] flex justify-center '>
                            <div id="size-inner-container" className='font-sergioTrendy h-[62px] w-[121px] '>
                                <div id="size-title" style={{fontSize:'24px', lineHeight:'24px'}} className='flex justify-center'>
                                    <p>Size</p>
                                </div>
                                <div id="sm-med-lg-inner" style={{fontSize:'16px', lineHeight:'16px'}} className='flex justify-evenly mt-[17px]'>
                                    <div  style={{backgroundColor:`${sizeOneBg}`, textDecoration:`${sizeOneStyle}`}} onClick={()=>handleSizeChange('Sm')} className=' rounded h-[16px]'>
                                        Sm
                                    </div>
                                    <div style={{backgroundColor:`${sizeTwoBg}`, textDecoration:`${sizeTwoStyle}`}} onClick={()=>handleSizeChange('Med')} className=' rounded h-[16px]'>
                                        Med
                                    </div>
                                    <div style={{backgroundColor:`${sizeThreeBg}`, textDecoration:`${sizeThreeStyle}`}} onClick={()=>handleSizeChange('Lg')} className=' rounded h-[16px]'>
                                        Lg
                                    </div>
                                </div>                        
                            </div>
                        </div>

                    </div>
                    {/* Toppings */}
                    <div className='flex justify-center w-full font-sergioTrendy mb-[36px] '>
                        <p style={{fontSize:'24px'}}>Toppings</p>
                    </div>
                    <div id="pb-form-toppings" className='md:flex ml-[10px] md:ml-[30px]'>
                        {/* Meat Toppings */}
                        <div id="meats-div" className="w-[285px] h-[210px] border-dashed">
                            {/* 138+37=175 */}
                            {/* Meats Title */}
                            <div id="meat-title" className="flex">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'20px', lineHeight:'21px'}} className="font-sergioTrendy underline">Meats</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <img src={Left} className="w-[20px] h-[20px]"/>
                                    <img src={Whole} className="w-[20px] h-[20px]"/>
                                    <img src={Right} className="w-[20px] h-[20px]"/>

                                </div>

                            </div>
                            {/* Ham */}
                            <div id="ham" className="flex mt-[10px]">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Ham</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <input onClick={()=>{dispatch(handleHam({name: 'ham', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.ham.left} type="checkbox"  className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleHam({name: 'ham', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.ham.whole} name="ham-whole" type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleHam({name: 'ham', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.ham.right} name="ham-right" type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                            {/* Beef */}
                            <div id="beef" className="flex mt-[10px]">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Beef</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <input onClick={()=>{dispatch(handleBeef({name: 'beef', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.beef.left} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleBeef({name: 'beef', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.beef.whole} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleBeef({name: 'beef', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.beef.right} type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                            {/* Salami */}
                            <div id="salami" className="flex mt-[10px]">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Salami</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <input onClick={()=>{dispatch(handleSalami({name: 'salami', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.salami.left} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleSalami({name: 'salami', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.salami.whole} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleSalami({name: 'salami', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.salami.right} type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                            {/* Pepperoni */}
                            <div id="pepperoni" className="flex mt-[10px]">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Pepperoni</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <input onClick={()=>{dispatch(handlePepperoni({name: 'pepperoni', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.pepperoni.left} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handlePepperoni({name: 'pepperoni', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.pepperoni.whole} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handlePepperoni({name: 'pepperoni', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.pepperoni.right} type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                            {/* Italian Sausage */}
                            <div id="italian-sausage" className="flex mt-[10px]">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Italian Sausage</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <input onClick={()=>{dispatch(handleItalianSausage({name: 'italianSausage', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.italianSausage.left} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleItalianSausage({name: 'italianSausage', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.italianSausage.whole} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleItalianSausage({name: 'italianSausage', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.italianSausage.right} type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                            {/* Bacon */}
                            <div id="bacon" className="flex mt-[10px]">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Bacon</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <input onClick={()=>{dispatch(handleBacon({name: 'bacon', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.bacon.left} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleBacon({name: 'bacon', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.bacon.whole} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleBacon({name: 'bacon', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.bacon.right} type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                        </div>

                        {/* Non-Meat Toppings */}
                        <div id="non-meats-div" className="mt-[60px] md:ml-[40px] md:mt-[0px] w-[285px] h-[210px] border-dashed">
                            {/* 138+37=175 */}
                            {/* Meats Title */}
                            <div id="meat-title" className="flex">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'20px', lineHeight:'21px'}} className="font-sergioTrendy underline">Non Meats</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <img src={Left} className="w-[20px] h-[20px]"/>
                                    <img src={Whole} className="w-[20px] h-[20px]"/>
                                    <img src={Right} className="w-[20px] h-[20px]"/>

                                </div>

                            </div>
                            {/* Onions */}
                            <div id="onions" className="flex mt-[10px] ">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Onions</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <input onClick={()=>{dispatch(handleOnions({name: 'onions', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.onions.left} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleOnions({name: 'onions', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.onions.whole} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleOnions({name: 'onions', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.onions.right} type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                            {/* Mushrooms */}
                            <div id="mushrooms" className="flex mt-[10px]">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Mushrooms</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <input onClick={()=>{dispatch(handleMushrooms({name: 'mushrooms', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.mushrooms.left} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleMushrooms({name: 'mushrooms', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.mushrooms.whole} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleMushrooms({name: 'mushrooms', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.mushrooms.right} type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                            {/* Black Olives */}
                            <div id="black-olives" className="flex mt-[10px]">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Black Olives</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                <input onClick={()=>{dispatch(handleBlackOlives({name: 'blackOlives', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.blackOlives.left} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleBlackOlives({name: 'blackOlives', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.blackOlives.whole} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleBlackOlives({name: 'blackOlives', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.blackOlives.right} type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                            {/* Green Peppers */}
                            <div id="green-peppers" className="flex mt-[10px]">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Green Peppers</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <input onClick={()=>{dispatch(handleGreenPeppers({name: 'greenPeppers', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.greenPeppers.left} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleGreenPeppers({name: 'greenPeppers', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.greenPeppers.whole} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleGreenPeppers({name: 'greenPeppers', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.greenPeppers.right} type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                            {/* Jalapeno Peppers */}
                            <div id="jalapeno-peppers" className="flex mt-[10px]">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Jalapeno Peppers</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <input onClick={()=>{dispatch(handleJalapenoPeppers({name: 'jalapenoPeppers', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.jalapenoPeppers.left} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleJalapenoPeppers({name: 'jalapenoPeppers', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.jalapenoPeppers.whole} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handleJalapenoPeppers({name: 'jalapenoPeppers', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.jalapenoPeppers.right} type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                            {/* Pineapple */}
                            <div id="pineapple" className="flex mt-[10px]">
                                <div className="w-[175px] h-[21px] border-dashed">
                                    <p style={{fontSize:'16px'}} className="font-sergioTrendy">Pineapple</p>
                                </div>
                                <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                    <input onClick={()=>{dispatch(handlePineapple({name: 'pineapple', side:'left side',price:.5}))}} checked={pizza.toppingsGrid.pineapple.left} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handlePineapple({name: 'pineapple', side:'whole pizza',price:1}))}} checked={pizza.toppingsGrid.pineapple.whole} type="checkbox" className="w-[20px] h-[20px]"/>
                                    <input onClick={()=>{dispatch(handlePineapple({name: 'pineapple', side:'right side',price:.5}))}} checked={pizza.toppingsGrid.pineapple.right} type="checkbox" className="w-[20px] h-[20px]"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Special Instructions */}
                    <div id="special-instructions-container" className='pr-[12px] pl-[12px] md:pr-[32px] md:pl-[32px]'>
                        <div id="si-title" style={{fontSize:'16px', lineHeight:'16px'}} className='mb-[16px] mt-[44px] md:mt-[36px] font-sergioTrendy'>
                            <p>
                                Special Instructions
                            </p>
                        </div>
                        <textarea onChange={(e)=>dispatch(handleSpecialInstructions(e.target.value))} id="special-instructions" className='p-[5px] w-full h-[106px] border-solid border-black border-[1px]'/>
                    </div>
                </div>
            </div>

            {/* Total */}
            <div style={{fontSize:'16px', lineHeight:'16px'}} id="total-div-row" className='mt-[16px] flex justify-center md:justify-end '>
                <div id="total-outer-container" className='w-[355px] flex justify-end '>
                    <div  id="total-inner-container">
                        <div id="total-text" className='w-[92px] font-sergioTrendy '>
                            <p>Total</p>
                        </div>
                        <div id="total-amount" className='flex justify-end mt-[3px] '>
                            <div className='font-sans mr-[3px] '>
                                <p>$</p>

                            </div>
                            <div className=' pt-[4px] justify-end font-sergioTrendy h-[24px] '>
                                <p>{pizza.price.toFixed(2)}</p>

                            </div>                            
                        </div>
                    </div>
                </div>                
            </div>


            {/* Add to Cart Button */}
            <div style={{fontSize:'16px',lineHeight:'16px'}} id="button-div-row" className='mt-[22px] mb-[25px]'>
                <div id="button-container" className='flex justify-end'>
                    <div id="button" className='bg-red-pp w-[202px] h-[47px] rounded-[5px] font-sergioTrendy flex justify-center'>
                        <p onClick={()=>{addPizza()}} className='font-sergioTrendy text-white mt-[15px]'>
                            Add to Cart
                        </p>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default PizzaBuilder;