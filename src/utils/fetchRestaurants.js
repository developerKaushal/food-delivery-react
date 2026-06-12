import { getRestaurantsApiUrl } from "./constants";

const parseJsonResponse = async (response) => {
  const text = await response.text();

  if (text.trimStart().startsWith("<")) {
    throw new Error(
      "Restaurant API is not available. Redeploy on Vercel so /api/restaurants works.",
    );
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Invalid response from restaurant API.");
  }
};

export const fetchRestaurants = async () => {
  const response = await fetch(getRestaurantsApiUrl());
  const json = await parseJsonResponse(response);

  if (!response.ok || json?.error) {
    throw new Error(json?.error || "Failed to load restaurants");
  }

  return (
    json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
  );
};
