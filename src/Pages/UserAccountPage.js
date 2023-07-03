import UserForm from "../Components/UserForm/UserForm";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'; 
import { deleteUser } from "../Redux/usersSlice";
const UserAccountPage = (props) => {
    const auth = useSelector((state)=>state.auth.isAuth)
    const user = useSelector((state)=>state.users)
    const dispatch = useDispatch()
    const [updateInfo, setUpdateInfo] = useState('update')

    return(
        <div id='user-account-page-container' className="min-h-screen w-full border-black border-dashed border-[1px]">
            
            {/* User Info */}
            <div id="user-account-page-body">
                <div style={{fontSize:"32px", lineHeight:"32px"}}className='flex justify-center font-sergioTrendy mt-[40px] md:mt-[71px] mb-[21px] md:mb-[30px]'>
                    <p>
                        User Info
                    </p>
                </div>            
                <div id="user-account-body-div1" className='flex justify-center'>

                    <UserForm 
                        updateInfo={updateInfo}
                        auth={auth}
                        user={user}
                    />

                </div>



                {/* Order History */}
                <div id="user-account-body-div2" className='' >
                    <div id="order-history-container-1" className="flex justify-center">
                        <div id='order-history-title' style={{fontSize:'32px', lineHeight:'32px'}} className="flex font-sergioTrendy mt-[58px] md:mt-[33px] mb-[32px]">
                            <p>
                                Order History
                            </p>
                        </div>
                    </div>
                    <div id="order-history-container-2" className="flex justify-center">
                        {/* Order History Container */}
                        <div id="order-history-items-outer-container" className="w-[361px] md:w-[680px]  bg-grey-pp rounded-[5px] p-[6px] min-h-[300px] md:min-h-[170px] h-[auto]">
                            <div id="order-history-items-inner-container" className="w-[full] bg-white rounded-[5px] p-[5px]  h-[100%]">
                        



                            </div>
                        </div>
                    </div>
                </div>



                {/* Danger Button */}
                <div id="user-account-body-div3" className='flex justify-center'>
                    <div style={{fontSize:"32px", lineHeight:"32px"}}className='flex justify-center font-sergioTrendy mt-[40px] md:mt-[71px] mb-[12px] '>
                        <p>
                            Danger
                        </p>
                        <p className="ml-[13px] font-coiny font-extrabold">
                            !!!
                        </p>
                    </div> 
 
                </div >

                <div id="user-account-body-div4" className='flex justify-center'>
                    <div className='flex justify-center'>
                        <div onClick={()=>{dispatch(deleteUser(user.id))}} id='sign-up-button' className="w-[191px] h-[47px] mb-[46px] rounded-[5px] bg-red-pp text-white font-sergioTrendy">
                            <p className="mt-[12px] ml-[31px]">Delete Account</p>
                        </div>
                        <div id="button-outer-container" className="flex justify-center">
                            <div id="button-inner-container" className="w-[95%] flex justify-end">

                            </div>
                        </div> 
                    </div>
                </div>








            </div>
        </div>
    )
}

export default  UserAccountPage;