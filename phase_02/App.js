//* Packages required
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

//* Context component
import UserContext from './utils/UserContext';

//* React Components
import Header from "./components/Header";
import Bodylayout from "./components/Bodylayout";
// import Contact from "./components/Contact";
// import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

//* Lazy Loading of Components
const About = lazy(()=> import('./components/About'));
const Contact = lazy(()=> import('./components/Contact'));

//* Main App Component
const Applayout = () => {

  const userName = 'Gagandeep Singh'

  return (
    //* Kept our main App component inside the <Context.Provider> tag so object is accessible throughout our app 
    <UserContext.Provider value={{userName}}> 
    <div id="appLayout">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {path: "/", element: <Bodylayout/>},
      { path: "/about", element: <Suspense><About /></Suspense> },
      { path: "/contact", element: <Suspense><Contact /></Suspense> },
      {path: "/restaurants/:resID", element: <RestaurantMenu/>}
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Applayout />);

root.render(<RouterProvider router={appRouter} />);
