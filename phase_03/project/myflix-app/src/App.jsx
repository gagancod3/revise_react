import React, {Suspense } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import MoviePosts from "./components/MoviePosts";
import DisplayMovie from "./components/DisplayMovie";
import SignUp from './components/Signup';
import { ThemeContext } from '@emotion/react';
import UserContext from './context/UserContext';

// import About from "./components/About";
// import Contact from "./components/Contact";
// import Subscription from "./components/Subscription";
// import PlatformInfo from "./components/PlatformInfo";

const About = React.lazy(() => import('./components/About'))
const Contact = React.lazy(() => import('./components/Contact'))
const Subscription = React.lazy(() => import('./components/Subscription'))
const PlatformInfo = React.lazy(() => import('./components/PlatformInfo'))


function App() {
  return (
    <>
    <UserContext.Provider value={{user: 'Gagan'}}>
      <Header />
      <hr />
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<MoviePosts />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="subscription" element={<Subscription />}></Route>
          <Route path="platforminfo" element={<PlatformInfo />}></Route>
        </Route>

        <Route
          path="/display-movies/:movieName"
          element={<DisplayMovie />}
        ></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
      </Routes>
      </Suspense>
      <Footer />
    </UserContext.Provider>
    </>
  );
}

export default App;
