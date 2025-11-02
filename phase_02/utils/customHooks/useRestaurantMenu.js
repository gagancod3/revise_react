import { useEffect, useState } from "react";
import { RES_URL } from "../common_url";

const useRestaurantMenu = (resID) => {
    console.log('inside custom hook');
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch(RES_URL+ resID);
        console.log(data);
        // const json = await data.json();
        // console.log(json);
        // setResInfo(json);
    }
    return resInfo
};

export default useRestaurantMenu;