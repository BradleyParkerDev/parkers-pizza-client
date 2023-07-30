import PizzaLogo from "./PizzaLogo.png"
import Hamburger from "./Hamburger.png"
import reject from "./reject.png"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'; 
import { authCheck, logout } from "../../Redux/authSlice"
import { loginUser } from "../../Redux/usersSlice"

const NavBar = (props) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state)=>state.users)
    const auth = useSelector((state)=>state.auth.isAuth)
    
    useEffect(()=>{
        dispatch(authCheck())

    },[auth])

    const [sideNavWidth, setSideNavWidth] = useState('0px')

    const openNav = () =>{

        setSideNavWidth('100%')

        return

    }
    const closeNav = () =>{
        setSideNavWidth('0px')

    }
    const handleNav = (pageName) =>{
        
        navigate(`${pageName}`)
        closeNav()
    }
    const logoutUser = () =>{
        dispatch(logout())
        navigate('/')
        closeNav()

    }


    return(
        <div>
            {/* Hidden Side Nav */}
            <div id="side-nav" style={{width:`${sideNavWidth}`,transition: "0.5s"}} className="md:w-[0px]top-0 right-0 h-full bg-white z-10 duration-500 overflow-x-hidden fixed font-sergioTrendy pt-[15px]  ">
                
                {/* login/register with reject button */}
                <div id="hidden-div-1" className='flex ml-[15px] mr-[15px] '>
                    <div id="login-register" className="min-w-[90%] w-auto ">
                        <div>
                            {auth && <p onClick={()=>{handleNav("/user-account")}} style={{fontSize:"32px"}}>{`Hi, ${user.firstName}`}</p>} 
                            {!auth && <p style={{fontSize:"32px"}} onClick={()=>{handleNav("/login")}}>Login</p>} 
                        </div>
                        <div className="flex">
                            <div>
                                {auth && <p style={{fontSize:"16px"}} onClick={()=>{logoutUser()}} >{`Logout`}</p>} 
                                {!auth && <p style={{fontSize:"16px"}} onClick={()=>{handleNav("/registration")}}>Register</p>}
                            </div>
                            <div className="font-sans mr-[5px] ml-[5px]">
                                <p>|</p>                                
                            </div>
                            <div className="w-[90px] flex ">
                                <p style={{fontSize:"16px"}} onClick={()=>{handleNav("/cart")}}>Cart</p>                                
                            </div>
                        </div>
                    </div> 
                    <div id="reject-div" className='flex justify-end w-full '>
                        <div id="reject-image">
                            <img src={reject} className='w-[25px] h-[25px]' onClick={()=>{closeNav()}}/>
                        </div>
                    </div>                   
                </div>
  


                {/* Menu and Pizza Builder */}
                <div id="hidden-div-2" className=' flex justify-center mt-[47px] mb-[30px]'>
                    <p style={{fontSize:"32px"}} onClick={()=>{handleNav("/menu")}}>Menu</p> 
                </div>
                <div id="hidden-div-3" className=' flex justify-center'>
                    <p style={{fontSize:"32px"}} onClick={()=>{handleNav("/pizza-builder")}}>Pizza Builder</p>
                </div>
            </div>

            {/* Visible NavBar */}
            <div id="nav-container" className="flex  h-[70px] bg-white" >
                    <div id="nav-logo" className="flex " onClick={()=>{handleNav("/")}}>
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
                    <div className='flex  w-full justify-end md:justify-start '>
                        <div id="nav-hamburger" style={{ marginRight:"22px", paddingTop:"15px"} } className="md:hidden" >
                            <img src={Hamburger} className=' w-[36px] h-[35px]' onClick={()=>{openNav()}}/>
                        </div>

                        {/* Navlinks for wider screen */}
                        <div id="Nav-links" style={{fontSize:'24px', lineHeight:'24px'}} className=" font-sergioTrendy hidden md:contents  ">
                            <div id="hidden-container-outer-div" className="flex justify-end w-[100%]">

                                <div id="hidden-container-inner-div" className="flex mr-[18px] ">

                                    <div id="hidden-div-menu" className=' flex justify-center mr-[34px] mt-[22px]'>
                                        <p  onClick={()=>{handleNav("/menu")}}>Menu</p> 
                                    </div>
                                    <div id="hidden-div-pizza-builder" className='mr-[85px] flex justify-center mt-[22px]'>
                                        <p  onClick={()=>{handleNav("/pizza-builder")}}>Pizza Builder</p>
                                    </div>
                                    <div id='login-account'>
                                        {auth && <p style={{fontSize:"22px"}} onClick={()=>{handleNav("/user-account")}} className="pb-[4px] mt-[14px]" >{`Hi, ${user.firstName}`}</p>} 
                                        {!auth && <div onClick={()=>{handleNav("/login")}} className="pb-[4px] mt-[14px]"><p style={{fontSize:'22px', lineHeight:'22px'}}>Login</p></div>}

                                        <div style={{fontSize:'14px', lineHeight:'14px'}} id='register-view-cart' className="flex">
                                            {auth && <div onClick={()=>{logoutUser()}}><p>Logout</p></div>}
                                            {!auth && <div onClick={()=>{handleNav("/registration")}}><p>Register</p></div>}
                                            <div className="font-sans mr-[5px] ml-[5px]">
                                                <p>|</p>
                                            </div>
                                            <div onClick={()=>{handleNav("/cart")}}>
                                                <p>Cart</p>
                                            </div>
                                        </div>
                                        
                                    </div>                                
                                </div>
                            </div>
                            
                            


                        </div>
                    </div>


            </div>            
        </div>


    )
}

export default NavBar;