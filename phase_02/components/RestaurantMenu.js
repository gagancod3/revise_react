import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RES_URL } from "../utils/common_url";

//* Custom Hook
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resMenu, setResMenu] = useState([]);
  const {resID} = useParams();

  console.log(resID);
  //* API not working since it's designed for Swiggy's internal usage
  
  // const fetchResMenu = async() => {
  //     const data = await fetch({RES_URL}+{resID}+'&catalog_qa=undefined&submitAction=ENTER',{
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //         },
  //         mode: "cors",
  //       });
  //     console.log(data);
  //   //   const json = await data.json();
  //   //   console.log(json);

  // }

  //* To optimize we can also use a customized hook like below
  const resInfo = useRestaurantMenu(resID);

  // useEffect(() => {
  //   fetchResMenu();
  // }, []);
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