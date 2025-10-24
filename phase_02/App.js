import ReactDOM from "react-dom/client";
import React from "react";
import resObjExt from "./restaurant";

// console.log(resObjExt, 'RES');

const Header = () => {
  return <div className="header">

    <div id="logo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeGUIc9g8-zC51cFCYQyeMQ_vuemWW5NfpA&s" alt="logo" />
    </div>
    <div>
 <ul id="headerList">
      <li>Home</li>
      <li>About</li>
      <li>Cart</li>
    </ul>
    </div>
   
  </div>;
};

const ResCards = (resData) => {

  // console.log(resData.resData.info ,'INFO');

  const {name, areaName, costForTwo, cuisines, cloudinaryImageId} = resData?.resData?.info;

  return (<div className="resCard">
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="imgCard" />
    <p>{name}</p>
    <p>{areaName}</p>
    <p>{cuisines.join(', ')}</p>
    <p><b>{costForTwo}</b></p>
  </div>)
}

const Bodylayout = () => {
  return(<div className="bodyLayout">
  <div className="cardGrid">
      {
        resObjExt.map((restaurant) => {
          // console.log(restaurant)
          //* We're pssing 'key' prop to provide unique id to avoid warnings
          return <ResCards resData = {restaurant} key={restaurant?.info?.id}/>
      })
      }
</div>
  </div>)
}

const Applayout = () => {
  return (<div id="appLayout">
  {/* Main App function */}
  <Header />
  <Bodylayout />

  </div>);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
