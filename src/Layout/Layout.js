import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import './Layout.css'
import '../App.css'
const Layout = (props) => {
    return (
        <div id="layoutDiv">

            <NavBar/>
            <div id="siteBackground">
                <Outlet
                />                
            </div>

        </div>
    );
}

export default Layout;