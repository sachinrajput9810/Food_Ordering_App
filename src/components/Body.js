import RestaurantCard  from "./RestaurantCard"
import {useState , useEffect} from "react"
import Shimmer from "./Shimmer"


let Body = () => {

    // console.log("rendered")

    const [listOfRestaurant , setListOfRestaurant] = useState([])
    const [searchText , setSearchText] = useState("")
    
    useEffect(()=> {
        fetchData() ;
    } , [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json() ;
        console.log(json)
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleFilter =  () => {
        const filteredList = listOfRestaurant.filter( (res) => res.info.avgRating >= 4.5 )
        setListOfRestaurant(filteredList)
    }

    const handleOnChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleSearch = () => {
        const filteredList = listOfRestaurant.filter( (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setListOfRestaurant(filteredList);
    }
    // conditional rendering
    // if(listOfRestaurant.length === 0) return <Shimmer/>

    return (listOfRestaurant.length === 0) ? <Shimmer/> : (
        <div className="body">
            
            <div className="filter">

                <div className="search">
                    <input type="text" 
                           className="search-box" 
                           placeholder="Name of Restaurant " 
                           value={searchText}
                           onChange={handleOnChange}
                    />

                    <button className="search-btn" onClick={handleSearch}>Search</button>
                </div>

                <button 
                    className="filter-btn"
                    onClick= {handleFilter}
                    >Top Rated Restaurants
                </button>

            
            </div>
            
            
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