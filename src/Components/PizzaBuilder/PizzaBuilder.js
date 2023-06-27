import Left from './Left.png'
import Right from './Right.png'
import Whole from './Whole.png'
import handTossed from './handTossed.png'
import deepDish from './deepDish.png'
import thinCrust from './thinCrust.png'

import { useState,useEffect } from 'react'

const PizzaBuilder = () => {

    const meats = [

        {
            name: 'Ham'
        },
        {
            name: 'Beef'
        },
        {
            name: 'Salami'
        },
        {
            name: 'Pepperoni'
        }






    ]



    return(
        //
        <div id="pb-form-outer-container" className='w-[355px] md:w-[680px] h-[1140px] md:h-[755px] bg-grey-pp rounded-[5px] p-[5px]'>
            <div id="pb-form-outer-container" className='w-full h-full pt-[22px] md:pt-[26px] bg-white rounded-[5px] '>

                <div id="crust-size-container" className='md:flex md:ml-[32px] '>
                    
                    
                    
                    
                    {/* Crust */}
                    <div id="crust-container" className='  md:w-[385px] font-sergioTrendy' >
                        <div id="crust-container" className='  md:w-[308px] font-sergioTrendy '>
                            <div id='crust-title' style={{fontSize:'24px', lineHeight:'24px'}} className='flex justify-center '>
                                <p>
                                    Crust
                                </p>
                            </div>
                            <div id='crusts' style={{fontSize:'14px', lineHeight:'14px'}} className='flex justify-evenly mt-[23px]'>
                                <p>
                                    Deep Dish
                                </p>
                                <p>
                                    Hand Tossed
                                </p>
                                <p>
                                    Thin Crust
                                </p>
                            </div>                            
                        </div>

                        <div id="pb-pizza-image-outer-container"className='flex justify-center md:justify-end'>

                            <div id="pb-pizza-image" className='flex mb-[19px] justify-center w-[122px] h-[128px] md:w-[159px] md:h-[153px] md:mt-[22px] mt-[29px]'>
                                <img src={deepDish} className="h-[128px] w-[122px] md:h-[153px] md:w-[159px]" />
                            </div>                       
                        
                        </div>

                    </div>




                    {/* Size */}
                    <div id="size-outer-container" className='mb-[47px] md:ml-[76px] flex justify-center '>
                        <div id="size-inner-container" className='font-sergioTrendy h-[62px] w-[121px] '>
                            <div id="size-title" style={{fontSize:'24px', lineHeight:'24px'}} className='flex justify-center'>
                                <p>Size</p>
                            </div>
                            <div id="sm-med-lg-inner" style={{fontSize:'16px', lineHeight:'16px'}} className='flex justify-evenly mt-[17px]'>
                                <p>
                                    Sm
                                </p>
                                <p>
                                    Med
                                </p>
                                <p>
                                    Lg
                                </p>
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
                                <input name="ham" type="checkbox" className="w-[20px] h-[20px]"/>
                                <input name="ham" type="checkbox" className="w-[20px] h-[20px]"/>
                                <input name="ham" type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Beef */}
                        <div id="beef" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Beef</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Salami */}
                        <div id="salami" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Salami</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Pepperoni */}
                        <div id="pepperoni" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Pepperoni</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Italian Sausage */}
                        <div id="italian-sausage" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Italian Sausage</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Bacon */}
                        <div id="bacon" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Bacon</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
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
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Mushrooms */}
                        <div id="mushrooms" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Mushrooms</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Black Olives */}
                        <div id="black-olives" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Black Olives</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Green Peppers */}
                        <div id="green-peppers" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Green Peppers</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Jalapeno Peppers */}
                        <div id="jalapeno-peppers" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Jalapeno Peppers</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Pineapple */}
                        <div id="pineapple" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Pineapple</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
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
                    <textarea id="special-instructions" className='p-[5px] w-full h-[106px] border-solid border-black border-[1px]'/>
                </div>
            </div>
        </div>
    )
}

export default PizzaBuilder;