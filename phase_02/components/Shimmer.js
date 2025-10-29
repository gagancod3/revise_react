const Shimmer = () => {
    return(<div className="shimmer-div">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
         <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
         <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
    </div>
    );
};

export default Shimmer;

/*

import React from "react";
import "./Shimmer.css"; // Import the shimmer styles

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10).fill("").map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-image" />
          <div className="shimmer-lines">
            <div className="shimmer-line short" />
            <div className="shimmer-line long" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

*/