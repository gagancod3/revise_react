//* packages
import { useState, useEffect } from "react";
//* accessing files
import ResCards from "./ResCards";
// import resObjExt from "../utils/restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Bodylayout = () => {
  //* useState hook (always declare hooks inside React component)
  const [resArr, setResArr] = useState([]);
  const [totalRes, setTotalRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  //* fetchData() to get data from an external URL
  const fetchData = async () => {
    try {
      //* An attempt to access Swiggy's API using CORS Proxy
      // const proxyUrl = "https://corsproxy.io/?url=";
      // const targetUrl =
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      // const fullUrl = proxyUrl + encodeURIComponent(targetUrl);
      // const data = await fetch(fullUrl);

      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (restaurants) {
        setTotalRes(restaurants);
        setResArr(restaurants);
      } else {
        console.warn("Unexpected Data Structure of Json", json);
      }
    } catch (error) {
      console.log("Failed to fetch");
    }
  };

  //* useEffect() - Typically placed after state declarations and before return JSX
  useEffect(() => {
    fetchData();
  }, []);

  if (resArr.length === 0) {
    return (
      <div>
        {" "}
        <Shimmer />{" "}
      </div>
    );
  }
  return (
    <div className="bodyLayout">
      <div className="search-btn">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          onClick={() => {
            const searchedRestaurant = totalRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            // console.log(searchedRestaurant);
            setResArr(searchedRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredRes = resArr.filter(
              (res) => res.info.avgRating > 4.3
            );
            // console.log(filteredRes, "filtered");
            setResArr(filteredRes);
          }}
        >
          Top-rated Restaurants
        </button>
        {/* {(filtered === true) &&
        <button className="filter-btn" onClick={() => {setResArr(resObjExt);}}>Back to Restaurants</button>} */}
      </div>
      <div className="cardGrid">
        {resArr.map((restaurant) => {
          //* We're passing 'key' prop to provide unique id to avoid warnings
          return (
            <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
              <ResCards resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Bodylayout;