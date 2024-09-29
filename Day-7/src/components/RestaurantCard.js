import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    const {resData} = props;
    // console.log("resdata..........",props);
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        costForTwo,
    } = resData.info;

    return(
        <div className="res-card" style={ {backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="No-Logo"
            src={CDN_URL+  cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(","+" ")}</h4>
            <h4>{avgRating} rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
};

export default RestaurantCard;