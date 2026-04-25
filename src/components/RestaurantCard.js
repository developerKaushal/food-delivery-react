import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {

  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div>
        <h1>{name}</h1>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>Delivery in {resData.info.sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
