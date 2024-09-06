import { CDN_URL } from "../utils/constant";

let RestaurantCard = (props) => {
    const {resData} = props ;
    const {name , cuisines , avgRating , sla , costForTwo , cloudinaryImageId} = resData?.info ;
    return (
        <div className="res-card">
            <img className="res-logo" src= {CDN_URL  + cloudinaryImageId}  alt="" />
            <div className="res-details">
                <h3 className="res-name">{name}</h3>
                <h4 className="cuisine">{cuisines.join(", ")}</h4>
                <h4 className="res-rating">{avgRating} ratings </h4>
                <h4 className="delhivery-time">{sla.deliveryTime} mins</h4>
                <h4 className="costForTwo">{costForTwo}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard