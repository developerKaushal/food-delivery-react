import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { fetchRestaurants } from "../utils/fetchRestaurants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const restaurants = await fetchRestaurants();
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Fetch Error:", error);
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
    const filtered = listOfRestaurants.filter(
      (res) => Number(res.info.avgRating) > 4,
    );
    setFilteredRestaurants(filtered);
    setSearchText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  if (isLoading) {
    return <Shimmer />;
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button className="btn-primary" onClick={fetchData}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <main className="body">
      <div className="body-toolbar">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="btn-secondary" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
        <p className="results-count">
          {filteredRestaurants.length} restaurant
          {filteredRestaurants.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="empty-state">
          <p>No restaurants match your search. Try a different name.</p>
          <button
            className="btn-secondary"
            onClick={() => {
              setSearchText("");
              setFilteredRestaurants(listOfRestaurants);
            }}
          >
            Show All Restaurants
          </button>
        </div>
      ) : (
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Body;
