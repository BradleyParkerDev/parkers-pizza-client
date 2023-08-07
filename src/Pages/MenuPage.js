import MenuCard from "../Components/MenuCard/MenuCard"

const MenuPage = () =>{

    const pizzas = [
        {
            name: 'Deep Dish Pizza',
            price: 12.50,
            crust: 'Deep Dish',
            size: 'Sm',
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'Hand Tossed Pizza',
            price: 10,
            crust: 'Hand Tossed',
            size: 'Sm',
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'Thin Crust Pizza',
            price: 7.50,
            crust: 'Thin Crust',
            size: 'Sm',
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }

    ]


    const sides = [
        {
            name: '12 Piece Hot Wings',
            price: 12,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'Bread Sticks',
            price: 5,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'Mozzarella Sticks',
            price: 5,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'Calamari',
            price: 8,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }

    ]

    const desserts = [
        {
            name: 'Chocolate Cake',
            price: 6,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'Chocolate Chip Cookie',
            price: 1.50,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'Vanilla Ice Cream',
            price: 3,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ]

    const beverages = [
        {
            name: '2 Liter Sprite',
            price: 2.50,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'Sprite Can',
            price: 1,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: '2 Liter Coke',
            price: 2.50,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'Coke Can',
            price: 1,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: '2 Liter Diet Coke',
            price: 2.50,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'Diet Coke Can',
            price: 1,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: '2 Liter Fanta',
            price: 2.50,
            image: '',
            imageHeight: '',
            imageWidth: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'Fanta Can',
            price: 1,
            image: '',
            imageHeight: '',
            imageWidth: '',
        }

    ]



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
                <div id='pizza-row' className="flex overflow-x-scroll mt-[21px] h-[220px] border-black border-dashed border-[1px]">
                    <MenuCard/>
   


                </div>

            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Sides Row */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div id='sides' className="ml-[26px] md:ml-[45px] h-[300px] w-[auto]  border-black border-dashed border-[1px]">
                <div id='sides-title' className="font-sergioTrendy border-black border-dashed border-[1px]">
                    <p>Sides</p>
                </div>
                <div id='sides-row'  className="flex mt-[21px] h-[220px] border-black border-dashed border-[1px]">

                </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Desserts Row */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div id='desserts' className="ml-[26px] md:ml-[45px] h-[300px] w-[auto]  border-black border-dashed border-[1px]">
                <div id='desserts-title' className="font-sergioTrendy border-black border-dashed border-[1px]">
                    <p>Desserts</p>
                </div>
                <div id='desserts-row'  className="flex mt-[21px] h-[220px] border-black border-dashed border-[1px]">

                </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Beverages Row */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div id='beverages' className="ml-[26px] md:ml-[45px] h-[300px] w-[auto]  border-black border-dashed border-[1px]">
                <div id='beverages-title' className="font-sergioTrendy border-black border-dashed border-[1px]">
                    <p>Beverages</p>
                </div>
                <div id='beverages-row'  className="flex mt-[21px] h-[220px] border-black border-dashed border-[1px]">

                </div>
            </div>
        </div>
    )
}

export default MenuPage;