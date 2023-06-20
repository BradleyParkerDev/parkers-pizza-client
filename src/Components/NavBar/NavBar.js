import './NavBar.css'
import '../../App.css';
import PizzaLogo from "./PizzaLogo.png"
import Hamburger from "./Hamburger.png"
const NavBar = (props) =>{


    return(
        <div id="nav-container" className="flex  h-[70px] bg-white" >
                <div id="nav-logo" className="flex ">
                    <div id="logo-image" className="flex w-[84px] h-[66px]">
                        <img id="pizza-logo"  className='w-[84px] h-[66px]' src ={PizzaLogo} alt="Logo"/>
                    </div>
                    <div id="logo-text" className='font-sergioTrendy text-red-pp'>
                        <div id="logo-text-line-one"style={{fontSize: "32px", lineHeight: "34px", paddingTop:"2px"} } className="flex ">
                            <p style={{paddingTop:"0px"} }>Parkers</p>
                        </div>
                        <div id="logo-text-line-two" style={{fontSize: "32px", lineHeight: "34px", width:"95px"}} className="flex ">
                            Pizza
                        </div>                        
                    </div>
                </div>
                <div className='flex  w-full justify-end'>
                    <div id="nav-hamburger" style={{ marginRight:"22px", paddingTop:"15px"} } className="" >
                        <img src={Hamburger} className='w-[36px] h-[35px]'/>
                    </div>
                </div>


        </div>

    )
}

export default NavBar;