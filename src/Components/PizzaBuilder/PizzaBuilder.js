import Left from './Left.png'
import Right from './Right.png'
import Whole from './Whole.png'
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
            <div id="pb-form-outer-container" className='w-full h-full bg-white rounded-[5px] '>


                {/* Toppings */}
                <div className='flex justify-center w-full font-sergioTrendy mb-[36px]'>
                    <p style={{fontSize:'24px'}}>Toppings</p>
                </div>
                <div id="pb-form-toppings" className='md:flex ml-[10px] md:ml-[30px]'>
                    {/* Meat Toppings */}
                    <div id="meats-div" className="w-[285px] h-[210px] border-dashed border-black border-[1px]">
                        {/* 138+37=175 */}
                        {/* Meats Title */}
                        <div id="meat-title" className="flex">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'20px', lineHeight:'21px'}} className="font-sergioTrendy underline">Meats</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <img src={Left} className="w-[20px] h-[20px]"/>
                                <img src={Whole} className="w-[20px] h-[20px]"/>
                                <img src={Right} className="w-[20px] h-[20px]"/>

                            </div>

                        </div>
                        {/* Ham */}
                        <div id="ham" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Ham</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Beef */}
                        <div id="beef" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Beef</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Salami */}
                        <div id="salami" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Salami</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Pepperoni */}
                        <div id="pepperoni" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Pepperoni</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Italian Sausage */}
                        <div id="italian-sausage" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Italian Sausage</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Bacon */}
                        <div id="bacon" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Bacon</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                    </div>

                    {/* Non-Meat Toppings */}
                    <div id="non-meats-div" className="mt-[60px] md:ml-[40px] md:mt-[0px] w-[285px] h-[210px] border-dashed border-black border-[1px]">
                        {/* 138+37=175 */}
                        {/* Meats Title */}
                        <div id="meat-title" className="flex">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'20px', lineHeight:'21px'}} className="font-sergioTrendy underline">Non Meats</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <img src={Left} className="w-[20px] h-[20px]"/>
                                <img src={Whole} className="w-[20px] h-[20px]"/>
                                <img src={Right} className="w-[20px] h-[20px]"/>

                            </div>

                        </div>
                        {/* Onions */}
                        <div id="onions" className="flex mt-[10px] ">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Onions</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Mushrooms */}
                        <div id="mushrooms" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Mushrooms</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Black Olives */}
                        <div id="black-olives" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Black Olives</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Green Peppers */}
                        <div id="green-peppers" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Green Peppers</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Jalapeno Peppers */}
                        <div id="jalapeno-peppers" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Jalapeno Peppers</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                        {/* Pineapple */}
                        <div id="pineapple" className="flex mt-[10px]">
                            <div className="w-[175px] h-[21px] border-dashed border-black border-[1px]">
                                <p style={{fontSize:'16px'}} className="font-sergioTrendy">Pineapple</p>
                            </div>
                            <div className="flex justify-evenly w-[108px] h-[21px] border-dashed border-black border-[1px]">
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                                <input type="checkbox" className="w-[20px] h-[20px]"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaBuilder;