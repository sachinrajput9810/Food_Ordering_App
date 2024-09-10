import {useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "./Constant";

const RestaurantDetails = () => {

    useEffect( () => {
        fetchMenu()
    } , [])

    const [resInfo , setResInfo] = useState(null) 

    const {id} = useParams()

    const fetchMenu = async () => {
        // console.log(id)
        const data = await fetch(MENU_API + id + "&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        setResInfo(json?.data)
        // console.log(json)
    }

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

export default RestaurantDetails;