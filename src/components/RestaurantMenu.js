import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    
    const {id} = useParams()
    const  resInfo = useRestaurantMenu(id) ;


    if(resInfo == null) return <Shimmer/>
    
    const {name , cuisines , costForTwoMessage} = resInfo.cards[2]?.card?.card?.info
    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",  ")}</h3>
            <h3> {costForTwoMessage} </h3>
            <h2>Menu</h2>
            {
                itemCards.map( item => (
                    <li key = {item.card.info.id}>
                        {item.card.info.name} - {" Rs. "} 
                        { item.card.info.defaultPrice/100 || item.card.info.price/100 }
                    </li>
                ) )
            }
        </div>
    )
}

export default RestaurantMenu;