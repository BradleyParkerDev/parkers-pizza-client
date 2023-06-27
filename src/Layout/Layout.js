import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import '../App.css'
const Layout = (props) => {
    return (
        <div className="bg-red-pp h-full flex justify-center " id="layoutDiv">
            <div className="bg-yellow-pp h-full w-full ml:w-[840px] ">
                <NavBar/>
                <Outlet/>                
                <Footer/>               
            </div>


        </div>
    );
}

export default Layout;