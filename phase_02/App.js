import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Bodylayout from "./components/Bodylayout";

//* Main App Component
const Applayout = () => {
  return (
    <div id="appLayout">
      <Header />
      <Bodylayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);