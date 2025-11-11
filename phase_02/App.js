//* Packages required
import React, { Suspense, lazy, useEffect, useState } from "react";
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

  const [userName, setUserName] = useState('Default User');

  //* Assume, we validate the user
  const fetchUser = async() => {
    // const data = await fetch('URL');
    // const json = data.json();
    const json = {user: 'Gagandeep Singh'};
    //* Setting the value of user from api call
    try{
        setUserName(json?.user);
    }
    catch(e) {
      console.error(`error received ${e}`);
    }
  }

  useEffect(()=> {
    fetchUser();
  },[]);

  return (
    //* Kept our main App component inside the <Context.Provider> tag so object is accessible throughout our app 
    <UserContext.Provider value={{userName, setUserName}}> 
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
