import RestaurantCard  from "./RestaurantCard"
import resList from "../utils/mockData"
import {useState} from "react"

let Body = () => {

    const [listOfRestaurant , setListOfRestaurant] = useState(resList)

    return (
        <div className="body">
            
            <button 
            className="filter"
            onClick= { () => {
                const filteredList = listOfRestaurant.filter( (res) => res.info.avgRating >= 4.5 )
                setListOfRestaurant(filteredList)
            }}
            >Top Rated Restaurants
            </button>
            
            
            <div className="res-container">
                {
                    listOfRestaurant.map( (restaurant) => (
                        <RestaurantCard key = {restaurant.info.id} resData =  {restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}


export default Body