import RegistrationForm from '../Components/RegistrationForm/RegistrationForm'
import Footer from '../Components/Footer/Footer'
import { useState, useEffect } from "react";

const RegistrationPage = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addressLineOne, setAddressLineOne] = useState('');
    const [addressLineTwo, setAddressLineTwo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');


    return(
        <div id="registration-page-body">
            <div style={{fontSize:"32px", lineHeight:"32px"}}className='flex justify-center font-sergioTrendy mt-[36px] mb-[21px] md:mb-[30px]'>
                <p>
                    Registration
                </p>
            </div>            
            <div id="registration-body-div1" className='flex justify-center'>

                <RegistrationForm />

            </div>
        </div>
    )

}

export default RegistrationPage;