import MenuCard from "../Components/MenuCard/MenuCard"

const MenuPage = (props) =>{

    // Pizzas

    // Sides

    // Desserts

    // Beverages
    const twoLiterSpriteObj = {
        type: 'beverage',
        name: '2 Liter Sprite',
        image: 'spriteTwoLiter',
        imageHeight:'121.67px',
        imageWidth:'50px',
        price: 2.50
    
    }
    const spriteCanObj = {
        type: 'beverage',
        name: 'Sprite Can',
        image: 'spriteCan',
        imageHeight:'90px',
        imageWidth:'49.93px',
        price: 1
    
    }
    const twoLiterCokeObj = {
        type: 'beverage',
        name: '2 Liter Coke',
        image: 'cokeTwoLiter',
        imageHeight:'121.67px',
        imageWidth:'40.47px',
        price: 2.50
    
    }
    const cokeCanObj = {
        type: 'beverage',
        name: 'Coke Can',
        image: 'cokeCan',
        imageHeight:'90px',
        imageWidth:'60.15px',
        price: 1
    
    }
    const twoLiterDietCokeObj = {
        type: 'beverage',
        name: '2 Liter Diet Coke',
        image: 'dietCokeTwoLiter',
        imageHeight:'121.67px',
        imageWidth:'41.14px',
        price: 2.50
    
    }
    const dietCokeCanObj = {
        type: 'beverage',
        name: 'Diet Coke Can',
        image: 'dietCokeCan',
        imageHeight:'90px',
        imageWidth:'47.71px',
        price: 1
    
    }
    const twoLiterFantaObj = {
        type: 'beverage',
        name: '2 Liter Fanta',
        image: 'fantaTwoLiter',
        imageHeight:'121.67px',
        imageWidth:'41.66px',
        price: 2.50
    
    }
    const fantaCanObj = {
        type: 'beverage',
        name: 'Fanta Can',
        image: 'fantaCan',
        imageHeight:'90px',
        imageWidth:'47.36px',
        price: 1
    
    }


    const beverages = [
        twoLiterSpriteObj,
        spriteCanObj,
        twoLiterCokeObj,
        cokeCanObj,
        twoLiterDietCokeObj,
        dietCokeCanObj,
        twoLiterFantaObj,
        fantaCanObj
    ]


    console.log(beverages)
    return(

        <div id="menu-container" className="w-full min-h-screen">
            <div id='menu-page-title' style={{fontSize:'32px', lineHeight:'32px'}} className="flex justify-center font-sergioTrendy mt-[26px] mb-[20px]">
                <p>Menu</p>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Pizza Row */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div id='pizzas' className="ml-[26px] md:ml-[45px] h-[300px] w-[auto]  border-black border-dashed border-[1px]">
                <div id='pizza-title' className="font-sergioTrendy border-black border-dashed border-[1px]">
                    <p>Pizzas</p>
                </div>
                <div id='pizza-row' className="flex  overflow-x-scroll mt-[21px] h-[220px] border-black border-dashed border-[1px]">
   


                </div>

            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Sides Row */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div id='sides' className="ml-[26px] md:ml-[45px] h-[300px] w-[auto]  border-black border-dashed border-[1px]">
                <div id='sides-title' className="font-sergioTrendy border-black border-dashed border-[1px]">
                    <p>Sides</p>
                </div>
                <div id='sides-row'  className="flex overflow-x-scroll mt-[21px] h-[220px] border-black border-dashed border-[1px]">

                </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Desserts Row */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div id='desserts' className="ml-[26px] md:ml-[45px] h-[300px] w-[auto]  border-black border-dashed border-[1px]">
                <div id='desserts-title' className="font-sergioTrendy border-black border-dashed border-[1px]">
                    <p>Desserts</p>
                </div>
                <div id='desserts-row'  className="flex overflow-x-scroll mt-[21px] h-[220px] border-black border-dashed border-[1px]">

                </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Beverages Row */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div id='beverages' className="ml-[26px] md:ml-[45px] h-[300px] w-[auto]  border-black border-dashed border-[1px]">
                <div id='beverages-title' className="font-sergioTrendy border-black border-dashed border-[1px]">
                    <p>Beverages</p>
                </div>
                <div id='beverages-row'  className="flex overflow-x-scroll mt-[21px] h-[220px] border-black border-dashed border-[1px]">
                    {beverages.map(beverage=>(<MenuCard beverage = {beverage}/>))}
                </div>
            </div>
        </div>
    )
}

export default MenuPage;