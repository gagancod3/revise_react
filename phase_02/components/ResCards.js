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
export default ResCards;