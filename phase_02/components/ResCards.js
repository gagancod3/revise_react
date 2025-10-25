import { Card_URL } from "../utils/common_url";
const ResCards = (resData) => {
  const { name, areaName, costForTwo, cuisines, cloudinaryImageId } =
    resData?.resData?.info;

  return (
    <div className="resCard">
      <img src={Card_URL + cloudinaryImageId} alt="imgCard" />
      <p>{name}</p>
      <p>{areaName}</p>
      <p>{cuisines.join(", ")}</p>
      <p>
        <b>{costForTwo}</b>
      </p>
    </div>
  );
};
export default ResCards;