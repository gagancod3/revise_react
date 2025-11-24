import React from "react";
import Movies from "../data/Movies.json";
import { Link } from "react-router-dom";

const MoviePosts = () => {
  const movieData = Movies;
  console.log(movieData);
  return (
    <>
      {movieData.map((movie) => {
        return (
          <Link to={"/display-movies/"+movie.title}> 
          <div className="poster-div" key={movie.key}>
            <h3>{movie.title}</h3>
            <img
              src={movie.poster}
              alt="img"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          </Link>
        );
      })}
    </>
  );
};

export default MoviePosts;
/*
<div>
      <h1>{myData.title}</h1>
      <p>{myData.description}</p>
      <ul>
        {myData.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
*/
