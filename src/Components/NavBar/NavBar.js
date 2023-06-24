import PizzaLogo from "./PizzaLogo.png"
import Hamburger from "./Hamburger.png"
import reject from "./reject.png"
import { useState } from 'react'
const NavBar = (props) =>{
    const [sideNavWidth, setSideNavWidth] = useState('0px')
    const openNav = () =>{

        setSideNavWidth('100%')

        return

    }
    const closeNav = () =>{
        setSideNavWidth('0px')

    }


    return(
        <div>
            {/* Hidden Side Nav */}
            <div id="side-nav" style={{width:`${sideNavWidth}`,transition: "0.5s"}} className="top-0 right-0 h-full bg-white z-10 duration-500 overflow-x-hidden fixed font-sergioTrendy pt-[15px]  ">
                
                
                <div id="hidden-div-1" className='flex ml-[15px] mr-[15px]'>
                    <div id="login-register">
                        <div>
                            <p style={{fontSize:"32px"}}>Login</p> 
                        </div>
                        <div>
                            <p style={{fontSize:"16px"}}>register</p>
                        </div>
                    </div> 
                    <div id="reject-div" className='flex justify-end w-full'>
                        <div id="reject-image">
                            <img src={reject} className='w-[25px] h-[25px]' onClick={()=>{closeNav()}}/>
                        </div>
                    </div>                   
                </div>
  



                <div id="hidden-div-2" className=' flex justify-center mt-[47px] mb-[30px]'>
                    <p style={{fontSize:"32px"}}>Menu</p> 
                </div>
                <div id="hidden-div-3" className=' flex justify-center'>
                    <p style={{fontSize:"32px"}}>Pizza Builder</p>
                </div>
            </div>

            {/* Visible NavBar */}
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
                            <img src={Hamburger} className='w-[36px] h-[35px]' onClick={()=>{openNav()}}/>
                        </div>
                    </div>


            </div>            
        </div>


    )
}

export default NavBar;