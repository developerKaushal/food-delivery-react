export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ951dMeDl7ojZZhwiYWCMT-TXqVXp13JVRcw&s";

const SWIGGY_RESTAURANTS_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const RESTAURANTS_API_URL =
  process.env.NODE_ENV === "production"
    ? "/api/restaurants"
    : `https://corsproxy.io/?${encodeURIComponent(SWIGGY_RESTAURANTS_API)}`;
