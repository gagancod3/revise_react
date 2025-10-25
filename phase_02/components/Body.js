//* packages
import { useState } from "react";

//* accessing files
import ResCards from "./ResCards";
import resObjExt from "../utils/restaurant";

const Bodylayout = () => {
  //* useState hook (always declare hooks inside React component)

  const [resArr, setResArr] = useState(resObjExt);
  const [filtered, setFiltered] = useState(false);

  return (
    <div className="bodyLayout">
      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredRes = resArr.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(filteredRes, "filtered");
            setResArr(filteredRes);
            setFiltered(true);
          }}
        >
          Top-rated Restaurants
        </button>
        {/* {(filtered === true) &&
        <button
        className="filter-btn"
          onClick={() => {
            setResArr(resObjExt);
          }}
        >
          Back to Restaurants
        </button>} */}
      </div>
      <div className="cardGrid">
        {resArr.map((restaurant) => {
          // console.log(restaurant)
          //* We're pssing 'key' prop to provide unique id to avoid warnings
          return <ResCards resData={restaurant} key={restaurant?.info?.id} />;
        })}
      </div>
    </div>
  );
};
export default Bodylayout;
