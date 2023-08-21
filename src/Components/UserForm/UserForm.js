import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'; 
import { registerUser, updateUser } from "../../Redux/usersSlice";
import Axios from "../../Lib/Axios";
const urlEndPoint = process.env.REACT_APP_BASE_URL;


const UserForm = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnteredPassword, setReEnteredPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [unitApartment, setUnitApartment] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [inputType, setInputType] = useState('password')

    const { 
        updateInfo,
        auth,
        user
    
    } = props;
    // console.log(updateInfo)

    const userObj = {

        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        streetAddress: streetAddress,
        unitApartment: unitApartment,
        city: city,
        state: state,
        zipcode: zipcode

    }

    useEffect((props)=>{


        if(updateInfo === 'update'){
            console.log(user.firstName)
            setId(user.id)
            setFirstName(user.firstName)  
            setLastName(user.lastName)  
            setEmail(user.email)
            setPassword('')
            setStreetAddress(user.streetAddress)
            setUnitApartment(user.unitApartment)
            setPhoneNumber(user.phoneNumber)
            setCity(user.city)
            setState(user.state)
            setZipcode(user.zipcode)
             
        }

        console.log(auth)
    },[auth])

    const signUp = () =>{
        dispatch(registerUser(userObj))
        navigate('/login');

    }

    const updateUserInfo = () =>{
        dispatch(updateUser(userObj))

    }

    // Change Handlers
    const handleFirstNameChange = (e) =>{
        setFirstName(e.target.value) 
        console.log(firstName) 
    }
    const handleLastNameChange = (e) =>{
        setLastName(e.target.value)  
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    } 
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    } 
    const handleReEnteredPasswordChange = (e) =>{
        setReEnteredPassword(e.target.value)
    } 
    const handleStreetAddressChange = (e) =>{
        setStreetAddress(e.target.value)
    } 
    const handleUnitApartmentChange = (e) =>{
        setUnitApartment(e.target.value)
    } 
    const handlePhoneNumberChange = (e) =>{
        setPhoneNumber(e.target.value)
    } 
    const handleCityChange = (e) =>{
        setCity(e.target.value)
    } 
    const handleStateChange = (e) =>{
        setState(e.target.value)
    } 
    const handleZipcodeChange = (e) =>{
        setZipcode(e.target.value)
    } 

    const showPassword = () =>{
        if(inputType === 'password')
        {
            setInputType('text')
        }else{
            setInputType('password')

        }
    }

    const showButton = (buttonType) =>{
        
        if(buttonType === 'update'){
            return(
                <div id="button-outer-container" className="flex justify-center">
                    <div id="button-inner-container" className="w-[95%] flex justify-end">
                        <div onClick={()=>{updateUserInfo()}} id='update-button' className="mt-[26px] w-[120px] h-[50px] rounded-[5px] bg-red-pp text-white font-sergioTrendy">
                            <p className="mt-[15px] ml-[29px]">Update</p>
                        </div>
                    </div>
                </div> 
            )
        }else{
            return(
                <div id="button-outer-container" className="flex justify-center">
                    <div id="button-inner-container" className="w-[95%] flex justify-end">
                        <div onClick={()=>{signUp()}} id='sign-up-button' className="mt-[26px] w-[120px] h-[50px] rounded-[5px] bg-red-pp text-white font-sergioTrendy">
                            <p className="mt-[15px] ml-[29px]">Sign Up</p>
                        </div>
                    </div>
                </div>                 
            )

        }
    }

    return(
        <div id='form-and-button'>
            {/* Form */}
            <div id="user-form-form-outer-container" className="  h-[657px] w-[95%] se:w-[365px] md:w-[680px] md:h-[360px] bg-grey-pp rounded-[5px] p-[5px]">
                <div id="user-form-form-inner-container" className="pt-[11px] pl-[18px] pr-[18px] h-full w-full bg-white">




                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* Div 1 - Email and Password */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    <div id='Div1-email-password' className="md:mt-[5px] md:flex">
                        {/* Email */}
                        <div id='email'>
                            <p style={{fontSize:"14px", lineHeight:"14px"}}className="mb-[10px] font-sergioTrendy">Email Address</p>
                            <input type="text" value={email} onChange={handleEmailChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] md:mr-[26px] mr-[14px] w-[318px] h-[33px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                        </div>
                        {/* Password and Re-enter Password */}
                        <div id='password-reenterPassword' className="mt-[18px] md:mt-[0px] flex">
                            <div id='password'>
                                <p style={{fontSize:"14px", lineHeight:"14px"}}className="mb-[10px] font-sergioTrendy">Password</p>
                                <input type={`${inputType}`} value={password} onChange={handlePasswordChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] md:mr-[26px] mr-[14px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                                <div id="show-password" className="flex mt-[5px]">
                                    <input onClick={()=>{showPassword()}} type="checkbox" />

                                    <p className="pl-[5px] ">
                                    Show Password
                                    </p>

                                </div>
                            </div>
                            <div id='reenter-password'>
                                <p style={{fontSize:"14px", lineHeight:"14px"}}className="mb-[10px] font-sergioTrendy"> Reenter Password</p>
                                <input type={`${inputType}`} value={reEnteredPassword} onChange={handleReEnteredPasswordChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] mr-[14px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            </div>
                        </div>
                    </div>   

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* Div 2 - First Name, Last Name, and Phone Number*/}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    <div id='Div2-firstName-lastName-phoneNumber' className="mt-[13px] md:flex">
                        {/* First Name and Last name */}
                        <div id='first-last-name' className="flex">
                            <div id='first-Name'>
                                <p style={{fontSize:"14px", lineHeight:"14px"}}className="mb-[10px] font-sergioTrendy">First Name</p>
                                <input type="text" value={firstName} onChange={handleFirstNameChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] md:mr-[26px] mr-[14px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            </div>
                            <div id='last-Name'>
                                <p style={{fontSize:"14px", lineHeight:"14px"}}className="mb-[10px] font-sergioTrendy">Last Name</p>
                                <input type="text" value={lastName} onChange={handleLastNameChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] mr-[14px] md:mr-[26px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div id='phoneNumber' className="mt-[18px] md:mt-[0px] w-[100%]">
                            <p style={{fontSize:"14px", lineHeight:"14px"}}className="mb-[10px] font-sergioTrendy">Phone Number</p>
                            <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] md:mr-[26px] mr-[14px] w-[318px] h-[33px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                        </div>

                    </div>

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* Div 3 - Street Address and Unit / Apartment */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    <div id='streetAddress-unitApartment' className="mt-[18px] md:flex">
                        <div id='streetAddress'>
                            <p style={{fontSize:"14px", lineHeight:"14px"}}className="mb-[10px] font-sergioTrendy">Street Address</p>
                            <input type="text" value={streetAddress} onChange={handleStreetAddressChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] md:w-[406px] md:mr-[26px] border-black border-[1px] border-solid w-full rounded-[5px]"/>
                        </div>
                        <div id='unitApartment'>
                            <div id="unit-form-line" style={{fontSize:"14px", lineHeight:"14px"}} className="flex mt-[18px] md:mt-[0px] mb-[10px] font-sergioTrendy">
                                <div>Unit</div>
                                <div className="font-sans ml-[5px] mr-[5px]">/</div> 
                                <div>Apt</div>
                            </div>
                            <input type="text" value={unitApartment} onChange={handleUnitApartmentChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] w-full md:w-[190px] border-black border-[1px] border-solid  rounded-[5px] "/>
                        </div>
                    </div>

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* Div 4 - City, State, Zipcode  */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    <div id ='city-state-zipcode' className="mt-[18px] md:flex">
                        <div id='city-state' className="flex">
                            <div id='city'>
                                <p style={{fontSize:"14px", lineHeight:"14px"}}className="mb-[10px] font-sergioTrendy">City</p>
                                <input type="text" value={city} onChange={handleCityChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] md:mr-[26px] mr-[14px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>

                            </div>

                            <div id='state'>
                                <p style={{fontSize:"14px", lineHeight:"14px"}}className="mb-[10px] font-sergioTrendy">State</p>
                                <input type="text" value={state} onChange={handleStateChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] w-[150px] md:mr-[26px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            </div>
                        </div>
                        <div id='zipcode' className="mt-[18px] md:mt-[0px]">
                            <p style={{fontSize:"14px", lineHeight:"14px"}}className="mb-[10px] font-sergioTrendy">Zipcode</p>
                            <input type="text" value={zipcode} onChange={handleZipcodeChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                        </div>

                    </div>

                </div>
            </div>
            {/* Button */}
            {showButton(updateInfo)}

        </div>
    )
}

export default UserForm;


