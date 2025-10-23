import React from "react";
import ReactDOM from "react-dom/client";

//* React Element Object

//* React.createElement() -> React Element Object -> HTML Element(render

const heading = React.createElement("h1", { id: "heading" }, "Hello ji");

//* Recommended way -

//* JSX - HTML-like syntax

//* JSX -> Parcel -> Babel -> React.createElement() -> React Element Object -> HTML Element(render)

//* React Element
const heading2 = <h2 id="heading2">Hello ji 2</h2>;

const heading3 = <h3 className="heading3">Hello ji 3</h3>;

const data = (<h1 id="heading2">Data 1</h1>);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(heading2);
// root.render(heading3);
root.render(data);

/*
* JSX is not JavaScript, means JS engine doesn't understand JSX
* JS engine understand ECMAScript
* JSX code is sent to Parcel first and is 'transpiled' then sent to JS engine to get executed
* Parcel is like a Manager who sends the task of transpilation to a package called 'Babel'



* Similarly, When we use React.createElement(), we create React Element Object which is then converted to HTML Element

*/
