import './NavBar.css'
import '../../App.css';
const NavBar = (props) =>{


    return(
        <div id="nav-container">
                <div id="nav-logo">
                    <div id="logo-image">
                        <img id="pizza-logo" src ="./Pizza Logo.png" alt="Logo"/>
                    </div>
                    <div id="logo-text">
                        <div id="logo-text-line-one">
                            Parkers
                        </div>
                        <div id="logo-text-line-two">
                            Pizza
                        </div>                        
                    </div>
                </div>
                <div id="hamburger">
                    
                </div>
        </div>
    )
}

export default NavBar;