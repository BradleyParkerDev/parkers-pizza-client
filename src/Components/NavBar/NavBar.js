import './NavBar.css'
import '../../App.css';
const NavBar = (props) =>{


    return(
        <div className="flex border-dashed border-black border-2 h-14" >
                <div className="flex border-dashed border-black border-2">
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