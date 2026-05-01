import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div
        className="filter-btn"
        onClick={() => {
          listOfRestaurants = listOfRestaurants.filter(
            (res) => Number(res.info.avgRating) > 4,
          );
          setListOfRestaurants(listOfRestaurants);
          console.log(listOfRestaurants);
        }}
      >
        <button>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
