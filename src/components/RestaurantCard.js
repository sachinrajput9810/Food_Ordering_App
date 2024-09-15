import { useContext } from "react";
import { CDN_URL } from "../utils/constant";

let RestaurantCard = (props) => {
    const {resData} = props ;
    const {name , cuisines , avgRating , sla , costForTwo , cloudinaryImageId , id} = resData?.info ;



    return (
        <div className="res-card w-60 h-[370] border-4 shadow-2xl m-5 border-black rounded-2xl  m-3 transition-transform duration-300 hover:scale-105 hover:rounded-2xl hover:shadow-black">
            <img className="res-logo rounded-xl w-60 h-40"   src= {CDN_URL  + cloudinaryImageId}  alt="" />
            <div className="res-details leading-tight p-2 ">
                <h3 className="res-name font-bold py-1 leading-tight  text-xl">{name}</h3>
                <div className="text-xs font-bold text-slate-700"> 
                    <h4 className="cuisine">{cuisines.join(", ")}</h4>
                    <h4 className="res-rating">{avgRating} ratings </h4>
                    <h4 className="delhivery-time">{sla.deliveryTime} mins</h4>
                    <h4 className="costForTwo">{costForTwo}</h4>
                
                    </div>
            </div>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div> 
                <label className="absolute  mt-[2px] text-xm w-20 rounded-xl font-bold justify-center text-center  ml-[180px] bg-slate-100 text-gray-400   ">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}


export default RestaurantCard