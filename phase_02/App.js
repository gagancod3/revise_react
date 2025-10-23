import ReactDOM from "react-dom/client";
import React from "react";

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

const ResCards = () => {
  return (<div className="resCard">
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ee1fdf16-ea5f-4a44-9e58-7b3a9dee2618_8614.jpg" alt="imgCard" />
    <p>Burger Club</p>
    <p>Ratings: 4.5</p>
    <p>20 minutes</p>
  </div>)
}

const Bodylayout = () => {
  return(<div className="bodyLayout">
    <ResCards/>
    <ResCards/>
    <ResCards/>
    <ResCards/>
    <ResCards/>

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
