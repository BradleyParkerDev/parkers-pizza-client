import MenuCard from "../Components/MenuCard/MenuCard"
import DealCard from "../Components/DealCard/DealCard"
import { useNavigate } from 'react-router-dom'
import { pizzas, sides, desserts,beverages } from "../Redux/cartSlice"

const HomePage = (props) =>{
    const navigate = useNavigate()
    const favorites = [pizzas[0],sides[0],desserts[0]]
    return(

        <div id="home-container" className="w-full h-screen">
            <div id='deals-row-container' className="ml-[34px] mb-[80px] min-h-[300px] w-[auto] border-black border-dashed border-[1px] ">
                <div id='deals-title' className=" flex mb-[37px] font-sergioTrendy  border-black border-dashed border-[1px]">
                    <p style={{fontSize:'32px', lineHeight:'32px'}}>Deals</p>
                </div>
                <div id='deals-row'  className="flex justify-center overflow-x-scroll mt-[21px] h-[220px]  border-black border-dashed border-[1px]">
                    <DealCard />
                    
                </div>
            </div>

            <div id='favorites-row-container' className="ml-[34px] h-[300px] w-[auto] border-black border-dashed border-[1px] ">
                <div id='favorites-title' className=" flex font-sergioTrendy  border-black border-dashed border-[1px]">
                    <p style={{fontSize:'32px', lineHeight:'32px'}}>Favorites</p>
                    <p onClick={()=>{navigate('/menu')}} className='ml-[14px] mt-[10px]' style={{fontSize:'16px', lineHeight:'16px'}}>View full menu</p>
                </div>
                <div id='favorites-row'  className="flex overflow-x-scroll mt-[21px] h-[220px]  border-black border-dashed border-[1px]">
                    <MenuCard pizza={pizzas[0]} />
                    <MenuCard side={sides[0]} />
                    <MenuCard dessert={desserts[0]} />
                    <MenuCard pizza={pizzas[2]} />
                    <MenuCard side={sides[2]} />
                    <MenuCard dessert={desserts[2]} />
                </div>
            </div>

        </div>
    )

}

export default HomePage;