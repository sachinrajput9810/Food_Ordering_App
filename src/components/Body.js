import RestaurantCard , {withPromotedLabel}   from "./RestaurantCard"
import {useState , useEffect, useContext} from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { RESTAURANT_LINK } from "../utils/constant"
// import UserContext from "../utils/UserContext"


let Body = () => {

    // console.log("rendered")

    const [listOfRestaurant , setListOfRestaurant] = useState([])
    const [searchText , setSearchText] = useState("")
    const [filteredList , setFilteredList] = useState([])

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard) ;
    
    
    useEffect(()=> {
        fetchData() ;
    } , [])

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LINK)
        const json = await data.json() ;
        // console.log(json)
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleFilter =  () => {
        const filteredList = listOfRestaurant.filter( (res) => res.info.avgRating >= 4.5 )
        setFilteredList(filteredList)
    }

    const handleOnChange = (e) => { 
        setSearchText(e.target.value)
    }

    const handleSearch = () => {
        const filteredList = listOfRestaurant.filter( (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredList(filteredList)
    }
    // conditional rendering
    // if(listOfRestaurant.length === 0) return <Shimmer/>

    const onlineStatus = useOnlineStatus() 
    if(onlineStatus === false) return (
        <h1>Seems you are Offline !! Try Connecting to Internet</h1>
    )

    // const {Name , setUserName} = useContext(UserContext)

    return (listOfRestaurant.length === 0) ? <Shimmer/> : (
        <div className="body">
            
            <div className="filter p-4 ml-6 mt-8 flex">

                <div className="search ">
                    <input type="text" 
                           data-testid = "searchInput"
                           className="search-box border-2 rounded-md border-black p-1" 
                           placeholder="Name of Restaurant" 
                           value={searchText}
                           onChange={handleOnChange}
                    />

                    <button className="search-btn m-4 bg-gray-400 p-1 px-5 rounded-md" onClick={handleSearch}>Search</button>
                </div>

                <button 
                    className="filter-btn rounded-md my-4 p-1 px-4 bg-yellow-500 border-black"
                    onClick= {handleFilter}
                    >Top Rated Restaurants
                </button>

                {/* <label className="filter-btn rounded-md my-4 p-1 px-4 ">UserName : </label>
                <input type="text"
                       className="filter-btn rounded-md my-4 p-1 px-4 border-2 border-black"
                       value={Name}
                       onChange={ (e) => {setUserName(e.target.value)}}
                        /> */}
                    
                    
            
            
            </div>
            
            
            <div className="res-container flex flex-wrap ml-4 justify-start">
                {
                    filteredList.map( (restaurant) => (
                        <Link 
                        to={"/restaurant/" + restaurant.info.id }
                        key = {restaurant.info.id}
                        className="custom-link"
                        >
                        {
                            restaurant.info.avgRating >= 4.5 ? 
                            (
                                <PromotedRestaurantCard resData = {restaurant} />
                            ) :
                            (
                                <RestaurantCard resData = {restaurant} />
                            )

                        }
                        </Link>
                    ))
                }
            </div> 
        </div>
    )
}


export default Body