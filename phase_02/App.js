import React from "react";
import ReactDOM from "react-dom/client";

// To make the below code work, we've added a {key: ''}
// Otherwise, it gives an error
//* Error: Each child in a list should have a unique "key" prop.

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", {key: "h1"}, "h1 tag from child1"),
    React.createElement("h2", {key: "h2"}, "h2 tag from child1"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", {key: "h1"}, "h1 tag from child2"),
    React.createElement("h2", {key: "h2"}, "h2 tag from child2"),
  ]), 
]);

// console.log(parent); // React Element Object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);