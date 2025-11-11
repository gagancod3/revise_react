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
      {resData?.cardDecor ? <p>{resData?.cardDecor}</p> : null}
    </div>
  );
};

//* Higher Order component
export const TopRatedRestaurants = (ResCards) => {
  const cardDecor = 'Recommended💖';
  return(props) => {
    // console.log('props', props);
    return (
      <div>
        <ResCards {...props} cardDecor={cardDecor}/>
      </div>
    )
  }
}

export default ResCards;