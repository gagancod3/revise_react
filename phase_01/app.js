//* Creating a <h1> tag using ReactJS

// const heading = React.createElement(
//   "h1",
//   { id: "headOne" },
//   "Hello world from React"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//* Creating a nested HTML structure

/*

* <div id="parent"> 
* <div id="child1">
* <h1>h1 tag from child1</h1>
* <h2>h2 tag from child1</h2>
* </div>
* <div id="child2">
* <h1>h1 tag from child2</h1>
* <h2>h2 tag from child2</h2>
* </div>
* </div>

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1 tag from child1"),
    React.createElement("h2", {}, "h2 tag from child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 tag from child2"),
    React.createElement("h2", {}, "h2 tag from child2"),
  ]),
]);

console.log(parent); // React Element Object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

/* 
* root.render(ReactElement) -

* it replaces the HTML tag with the react element object content

* This means ReactJS is only applied to a particular <div> tag with id= 'root' and on all of html

* Therefore, ReactJS can be also be used a specific portion of the a webpage, 
* if we insert other HTML elements apart from <div> tag wth id='root'

* That's why ReactJS is a library which can be plugged-in to HTML structure unlike frameworks like ANgularJS
*/