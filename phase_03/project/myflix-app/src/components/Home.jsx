import React, { useState } from "react";
import Carousel from "./Carousel";
import '../styles/Home.css';
import SideBar from "./SideBar";
import MoviePosts from "./MoviePosts";

function Home() {
  const brandspaceImages = [
    {
      id: 1,
      url: "https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/Row95-Stocksy_txpa83009d9c2q300_OriginalDelivery_4009067_jpg.jpg",
      alt: "Brand Image 1",
    },
    {
      id: 2,
      url: "https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/Row105-Stocksy_txpa83009d9c2q300_OriginalDelivery_3537189_jpg.jpg",
      alt: "Brand Image 2",
    },
    {
      id: 3,
      url: "https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/Row77-Stocksy_txpa83009d9c2q300_OriginalDelivery_4435197_jpg.jpg",
      alt: "Brand Image 3",
    },
  ];
  const popularImages = [
    {
      id: 1,
      url: "https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/Row88-Stocksy_txpa83009d9c2q300_OriginalDelivery_4206918_jpg.jpg",
      alt: "Brand Image 1",
    },
    {
      id: 2,
      url: "https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/Row89-Stocksy_txpa83009d9c2q300_OriginalDelivery_4196617_jpg.jpg",
      alt: "Brand Image 2",
    },
    {
      id: 3,
      url: "https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/Row79-Stocksy_txpa83009d9c2q300_OriginalDelivery_4357559_jpg.jpg",
      alt: "Brand Image 3",
    },
    {
      id: 4,
      url: "https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/Row100-Stocksy_txpa83009d9c2q300_OriginalDelivery_3619623_jpg.jpg",
      alt: "Brand Image 4",
    },
    {
      id: 5,
      url: "https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/Row107-Stocksy_txpa83009d9c2q300_OriginalDelivery_3535986_jpg.jpg",
      alt: "Brand Image 5",
    },
  ];

  const [theme, setTheme] = useState();
  let isLogged = false;
  // const [content, setContent] = useState(null);
  let content = null;

  // Trying to set Theme for Home component layout
  const changeTheme = (event) => {
    if (event.target.innerText === 'Dark') {
      setTheme({backgroundColor:'purple', color:'white'})
    }
    else if (event.target.innerText === 'Light'){
      setTheme({backgroundColor:'white', color:'black'})

    }
  }

  if (isLogged) {
    content = (<>
    {/* trendingImages */}
      <Carousel images={brandspaceImages} title="Trending on myFlix"/>
      {/* popularImages */}
      <Carousel images={popularImages} title="Popular on myFlix"/>
    </>)
  }
  else {
    content = (
    <><div style={{width:'400px', border: '1px solid black', margin:'auto'}}>
      <h3>New Users get 50% off on their subscription</h3>
      <span>Get started with myFlix</span>
    </div>
    </>)
  }
  return (
    <div style={theme}>
      <SideBar/>
      <div id="theme">
        <span>Choose a theme:</span>
        <button className="button" onClick={changeTheme}>Dark</button>
        <button className="button" onClick={changeTheme}>Light</button>
      </div>
      {content}
    </div>
  );
}

export default Home;
