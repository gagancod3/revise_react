import React from "react";
import ReactDOM from "react-dom/client";

//* React Component
const Heading1 = () => {
  return <h1 id="head1">Heading 1 from React component</h1>;
};

const Heading2 = () => <h2 id="head2">Heading 2 from React component</h2>;

const heading3 = <h3 id="head3">Heading 3 from React Element</h3>;

const number = 1000;
const ContentCombined = () => (
  <div id="div1">
    {/* calling React components in another component - 'Component Composition' */}
    <Heading1 />
    <Heading2 />
    {/* similarly, we can also do by these ways as well */}
    {Heading1()}
    <Heading2></Heading2>
    {/* calling React Element */}
    {heading3}
    {/* adding any variable to the JSX */}
    <p>{number}</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ContentCombined />);