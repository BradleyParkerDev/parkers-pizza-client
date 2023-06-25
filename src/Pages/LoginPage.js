import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const LoginPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // useEffect(()=>{




    // },[email,password])


    const login = () => {
        console.log(email)
        console.log(password)
        navigate("/");

    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    } 


    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    } 




    return(
        <div id="login-body" className="h-[90%] flex flex-col">
            <div style={{fontSize:"32px", lineHeight:"32px"}} className="flex justify-center font-sergioTrendy mt-[34px] mb-[21px]">
                <p>Login</p>
            </div>
            <div id="login-content" className="flex justify-center  h-auto">
                <div id="outer-login-form-container" className="w-[275px] h-[275px] se:w-[320px] bg-grey-pp rounded-[5px] p-[4px]">
                    <div id="inner-login-form-container" className="w-full h-full bg-white p-[35px] pb-[20px]">
                        <div id="login-form-line1" className="w-full h-1/2">
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Email</p>
                            <input type="text" value={email} onChange={handleEmailChange} style={{height:"55px", fontSize:"24px", lineHeight:"24px"}} className="border-black border-[1px] border-solid w-full rounded-[5px]"/>
                        </div>
                        <div id="login-form-line2" className="w-full h-1/2">
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Password</p>
                            <input type="password" value={password} onChange={handlePasswordChange} style={{height:"55px", fontSize:"24px", lineHeight:"24px"}} className="border-black border-[1px] border-solid w-full rounded-[5px]"/>
                            <div id="show-password" className="flex mt-[5px]">
                                <input type="checkbox" />
                                
                                <p className="pl-[5px] ">
                                    Show Password
                                </p>

                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <div id='register-div' className="flex justify-center">
                <div style={{fontSize:"14px", lineHeight:"14px"}}id='register-inner-div ' className=" mt-[10px] w-[275px] se:w-[320px] flex justify-end font-sergioTrendy">
                    <p onClick={()=>{navigate('/register')}}>Register</p>
                </div>                
            </div>
            <div id="button-col-div" className="flex justify-center">
                <div id="button-holder" className="flex justify-end w-[275px] se:w-[320px] mb-[400px] md:mb-[280px]">
                    <div id="login-button" onClick={()=>{login()}} className="w-[85px] h-[50px] bg-red-pp rounded-[5px] mt-[30px]">
                        <p className="text-white font-sergioTrendy mt-[12px] ml-[17px]">Login</p>
                    </div>
                </div>

            </div>

            <div id="login-footer" className="flex flex-col justify-end  border-black border-2 border-dashed h-auto">
                <Footer/>
            </div>


        </div>
        )

}

export default LoginPage;