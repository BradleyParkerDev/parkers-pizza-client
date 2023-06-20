import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import './Layout.css'
import '../App.css'
const Layout = (props) => {
    return (
        <div className="bg-red-pp h-screen flex justify-center "id="layoutDiv">
            <div className="bg-yellow-pp h-screen w-7/12">
                <NavBar/>
                <div id="siteBackground">
                    <Outlet
                    />                
                </div>                
            </div>


        </div>
    );
}

export default Layout;