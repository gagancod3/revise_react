import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RES_URL } from "../utils/common_url";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const {resID} = useParams();

  console.log(resID);

  //* API not working since it's designed for Swiggy's internal usage
  const fetchResMenu = async() => {
      const data = await fetch({RES_URL}+{resID}+'&catalog_qa=undefined&submitAction=ENTER',{
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          mode: "cors",
        });
      console.log(data);
    //   const json = await data.json();
    //   console.log(json);

  }

//   const fetchResMenu = async () => {
//     try {
//       const response = await fetch(
//         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=16865&catalog_qa=undefined&submitAction=ENTER",
//         {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//           },
//           mode: "cors",
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const text = await response.text();

//       if (!text) {
//         throw new Error("Empty response body");
//       }

//       const json = JSON.parse(text);
//       console.log(json);

//       // You can now safely set state
//       setResMenu(json);
//     } catch (error) {
//       console.error("Error fetching restaurant menu:", error.message);
//     }
//   };


  useEffect(() => {
    fetchResMenu();
  }, []);
  return (
    <div>
      <h1>name of restaurant</h1>
      <h3>cuisines</h3>
      <h3>location</h3>
      <h3>Average Cost</h3>
    </div>
  );
};

export default RestaurantMenu;