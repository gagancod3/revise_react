import { Card_URL } from "../utils/common_url";
const ResCards = (resData) => {
  const { name, areaName, costForTwo, cuisines, cloudinaryImageId, avgRating } =
    resData?.resData?.info;

  return (
    <div className="resCard">
      <img src={Card_URL + cloudinaryImageId} alt="imgCard" />
      <p> <b>{name}</b></p>
      <p>{areaName}</p>
      <p>{cuisines.join(", ")}</p>
      <p>
        <b>{costForTwo}</b>
      </p>
      <p>{avgRating} ⭐</p>
    </div>
  );
};

//* Higher Order component
export const TopRatedRestaurants = (ResCards) => {
  return(props) => {
    // console.log('props', props);
    return (
      <div>
        <label><b>Recommended</b></label>
        <ResCards {...props}/>
      </div>
    )
  }
}

export default ResCards;