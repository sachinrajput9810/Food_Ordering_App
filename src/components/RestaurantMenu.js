import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuItemCategory from "./MenuItemCategory";


const RestaurantMenu = () => {


    const [showIndex , setShowIndex] = useState(null)
    const {id} = useParams()
    const  resInfo = useRestaurantMenu(id) ;
    
    const dummy = "dummy data"

    if(resInfo == null) return <Shimmer/>
    
    const {name , cuisines , costForTwoMessage} = resInfo.cards[2]?.card?.card?.info
    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c?.card?.card?.["@type"] 
        === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )

    const handleClick = (idx) => {
        setShowIndex(showIndex === idx  ? null : idx)
    }
    
    
    // console.log(categories)

    return  (
        <div className="menu text-center">
            <h1 className="my-6 font-bold text-2xl">{name}</h1>
            <p className="font-semibold text-lg">
                {cuisines.join(",  ")} - {costForTwoMessage}
            </p>

            {categories.map( (category , idx) =>
               <MenuItemCategory key = {category.card.card.title} 
                                showItem = {idx === showIndex } 
                                data = {category?.card?.card} 
                                setShowIndex = { () => {handleClick(idx)} }
                                dummy = {dummy}
                /> 
            )}
            
        </div>
    )
}

export default RestaurantMenu;