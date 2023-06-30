import PizzaBuilder from "../Components/PizzaBuilder/PizzaBuilder";
import Footer from "../Components/Footer/Footer";
const PizzaBuilderPage = () =>{
    return(
        <div id='pb-page-container' className="min-h-screen">
            <div id ="pb-page-title" style={{fontSize:'32px', lineHeight:'32px'}} className=" mt-[46px] md:mt-[28px] mb-[15px] md:mb-[34px] font-sergioTrendy flex justify-center">
                <p>Pizza Builder</p>
            </div>
            <div className="flex justify-center">

                <PizzaBuilder />
                
            </div>
        </div>
    )

}

export default PizzaBuilderPage;