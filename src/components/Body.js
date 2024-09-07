import RestaurantCard  from "./RestaurantCard"
import {useState , useEffect} from "react"
import Shimmer from "./Shimmer"

let Body = () => {

    const [listOfRestaurant , setListOfRestaurant] = useState([])
    
    useEffect(()=> {
        fetchData() ;
    } , [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json() ;
        console.log(json)
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // conditional rendering
    if(listOfRestaurant.length === 0) return <Shimmer/>

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