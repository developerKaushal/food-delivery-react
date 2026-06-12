import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <article className="res-card">
      <img
        alt={name}
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        loading="lazy"
      />
      <div className="res-card-body">
        <h3 className="res-card-title">{name}</h3>
        <p className="res-card-cuisines">{cuisines.join(", ")}</p>
        <div className="res-card-meta">
          <span className="res-rating">★ {avgRating}</span>
          <span className="res-cost">{costForTwo}</span>
        </div>
        <p className="res-delivery">Delivery in {sla.slaString}</p>
      </div>
    </article>
  );
};

export default RestaurantCard;
