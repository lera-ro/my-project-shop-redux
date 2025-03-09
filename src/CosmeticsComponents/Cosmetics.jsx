import Cosmetic from "./Cosmetic";
import dataCosmetics from "../data/dataCosmetics";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../redux/cosmeticsSlice";
import AllCategories from "../Filter/AllCategories";

const Cosmetics = () => {   
    const selectedCategory = useSelector(getSelectedCategory);

    return(<div > 
        <div className="cosmetics-goods"> 
            <div>
                <h1>select a product</h1> 
            </div>         
            <div>
              <AllCategories />  
            </div>          
        </div> 
        <div className="goods">
            {dataCosmetics
            .filter(cosmetic => {
                if (selectedCategory === 'all') return true;
                return selectedCategory === cosmetic.category;
            })
            .map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id}/>
            )}  
        </div>
    </div>)
}

export default Cosmetics;