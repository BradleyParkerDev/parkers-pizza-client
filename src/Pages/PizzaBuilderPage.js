import PizzaBuilder from "../Components/PizzaBuilder/PizzaBuilder";
import Footer from "../Components/Footer/Footer";
const PizzaBuilderPage = () =>{
    return(
        <div>
            <div className="flex justify-center">
                <PizzaBuilder />
                
            </div>
            <Footer/>        
        </div>
    )

}

export default PizzaBuilderPage;