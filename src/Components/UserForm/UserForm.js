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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [unitApartment, setUnitApartment] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

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
             
        }

        console.log(auth)
    },[auth])

    const signUp = () =>{
        dispatch(registerUser(userObj))
        navigate('/login');

    }

    const updateUserInfo = () =>{
        dispatch(updateUser(userObj))
        // let req = userObj
        // Axios.put(`/users/update-user/${req.id}`, req)
        // .then(function (response) {
        // },{
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // })
        // .catch(function (error) {
        //   console.log(error);
        // }); 
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
            <div id="user-form-form-outer-container" className="  h-[510px] w-[95%] se:w-[365px] md:w-[680px] md:h-[360px] bg-grey-pp rounded-[5px] p-[5px]">
                <div id="user-form-form-inner-container" className="pt-[11px] pl-[18px] pr-[18px] h-full w-full bg-white">

                    {/* UserForm Div 1 */}
                    <div id="user-form-div1" className="flex">
                        <div>
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Email</p>
                            <input type="text" value={email} onChange={handleEmailChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] md:mr-[26px] mr-[14px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                        
                        </div>
                        
                        <div>
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Password</p>
                            <input type="password" value={password} onChange={handlePasswordChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] mr-[14px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            <div id="show-password" className="flex mt-[5px]">
                                <input type="checkbox" />
                                
                                <p className="pl-[5px] ">
                                    Show Password
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* UserForm Div 2 */}

                    <div id="user-form-div2" className="md:flex mt-[18px]" >

                        <div id="user-form-div2-inner1" className="flex">
                            <div>
                                <p style={{fontSize:"16px", lineHeight:"16px"}}className=" mb-[10px] font-sergioTrendy">First Name</p>
                                <input type="text" value={firstName} onChange={handleFirstNameChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] md:mr-[26px] mr-[14px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            
                            </div>
                            
                            <div>
                                <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Last Name</p>
                                <input type="text" value={lastName} onChange={handleLastNameChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] md:mr-[26px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            </div>

                        </div>

                        <div id="user-form-div2-inner2" className="mt-[18px] md:mt-[0px]">
                            <div>
                                <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Phone Number</p>
                                <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                            
                            </div>


                        </div>
                    </div>

                    {/* UserForm Div 3 */}

                    <div id="user-form-div3" className="md:flex mt-[18px]">
                        <div>
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">Street Address</p>
                            <input type="text" value={streetAddress} onChange={handleStreetAddressChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] md:w-[406px] md:mr-[26px] border-black border-[1px] border-solid w-full rounded-[5px]"/>
                        
                        </div>
                        
                        <div>
                            <div id="unit-form-line" style={{fontSize:"16px", lineHeight:"16px"}} className="flex mt-[18px] md:mt-[0px] mb-[10px] font-sergioTrendy">
                               <div>Unit</div>
                                <div className="font-sans ml-[5px] mr-[5px]">/</div> 
                                <div>Apt</div>
                            </div>
                            <input type="text" value={unitApartment} onChange={handleUnitApartmentChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px] "/>
                        </div>

                    </div>

                    {/* UserForm Div 4 */}
                    <div id="user-form-div4" className="flex mt-[18px] ">
                        <div>
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">City</p>
                            <input type="text" value={city} onChange={handleCityChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] md:mr-[26px] mr-[14px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
                        
                        </div>
                        
                        <div>
                            <p style={{fontSize:"16px", lineHeight:"16px"}}className="mb-[10px] font-sergioTrendy">State</p>
                            <input type="text" value={state} onChange={handleStateChange} style={{height:"33px", fontSize:"24px", lineHeight:"24px"}} className="pl-[3px] pr-[3px] w-[150px] md:w-[190px] border-black border-[1px] border-solid  rounded-[5px]"/>
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

// const [email, setEmail] = useState(user.email);
// const [password, setPassword] = useState();
// const [firstName, setFirstName] = useState(user.firstName);
// const [lastName, setLastName] = useState(user.lastName);
// const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
// const [streetAddress, setStreetAddress] = useState(user.streetAddress);
// const [unitApartment, setUnitApartment] = useState(user.unitApartment);
// const [city, setCity] = useState(user.city);
// const [state, setState] = useState(user.state);