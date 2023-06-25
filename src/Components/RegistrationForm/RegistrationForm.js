import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addressLineOne, setAddressLineOne] = useState('');
    const [addressLineTwo, setAddressLineTwo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');



    const navigate = useNavigate();

    const handleChange = (e) =>{
        if(e === email){
            setEmail(e.target.value)
        }

    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    } 


    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    } 


    return(
        <div id='form-and-button'>
            {/* Form */}
            <div id="registration-form-outer-container" className="  h-[510px] w-[95%] se:w-[365px] md:w-[680px] md:h-[360px] bg-grey-pp rounded-[5px] p-[5px]">
                <div id="registration-form-inner-container" className="pt-[11px] pl-[18px] pr-[18px] h-full w-full bg-white">

                    {/* Registration Div 1 */}
                    <div id="registration-div1" className="flex">
                        <div>
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Email</p>
                            <input type="text" value={email} onChange={handleEmailChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="md:mr-[26px] mr-[14px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                        
                        </div>
                        
                        <div>
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Password</p>
                            <input type="password" value={password} onChange={handlePasswordChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className=" w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            <div id="show-password" className="flex mt-[5px]">
                                <input type="checkbox" />
                                
                                <p className="pl-[5px] ">
                                    Show Password
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Registration Div 2 */}

                    <div id="registration-div2" className="md:flex mt-[18px]" >

                        <div id="registration-div2-inner1" className="flex">
                            <div>
                                <p style={{fontSize:"16px", lineHeight:"16px"}}className=" mb-[10px] font-sergioTrendy">First Name</p>
                                <input type="text" value={firstName} onChange={handleChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="md:mr-[26px] mr-[14px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            
                            </div>
                            
                            <div>
                                <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Last Name</p>
                                <input type="text" value={lastName} onChange={handleChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="md:mr-[26px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            </div>

                        </div>

                        <div id="registration-div2-inner2" className="mt-[18px] md:mt-[0px]">
                            <div>
                                <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Phone Number</p>
                                <input type="text" value={phoneNumber} onChange={handleChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            
                            </div>


                        </div>
                    </div>

                    {/* Registration Div 3 */}

                    <div id="registration-div3" className="md:flex mt-[18px]">
                        <div>
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Street Address</p>
                            <input type="text" value={addressLineOne} onChange={handleChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className=" md:w-[406px] md:mr-[26px] border-black border-[1px] border-solid w-full rounded-[5px]"/>
                        
                        </div>
                        
                        <div>
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className=" mt-[18px] md:mt-[0px] mb-[10px] font-sergioTrendy">Unit / Apt</p>
                            <input type="text" value={addressLineTwo} onChange={handleChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className=" w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px] "/>
                        </div>

                    </div>

                    {/* Registration Div 4 */}
                    <div id="registration-div4" className="flex mt-[18px] ">
                        <div>
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">City</p>
                            <input type="text" value={city} onChange={handleChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="md:mr-[26px] mr-[14px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                        
                        </div>
                        
                        <div>
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">State</p>
                            <input type="text" value={state} onChange={handleChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                        </div>
                    </div>

                    

                </div>
            </div>
            {/* Button */}
            <div id="button-outer-container" className="flex justify-center">
                <div id="button-inner-container" className="w-[95%] flex justify-end">
                    <div id='sign-up-button' className="mt-[26px] w-[120px] h-[50px] rounded-[5px] bg-red-pp text-white font-sergioTrendy">
                        <p className="mt-[15px] ml-[29px]">Sign Up</p>
                    </div>
                </div>
            </div>            

        </div>
    )
}

export default RegistrationForm;