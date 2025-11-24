import React from 'react'
import { useParams } from 'react-router-dom'
import { useMovie } from '../customHooks/useMovies';

const DisplayMovie = () => {
    // const movieObj = useParams();
    // console.log(movieObj, 'OBJ');   //{movieName: 'Sci-Fi Universe'}

    // Destructuring the Object
    const {movieName} = useParams(); 
    const  movie = useMovie(movieName);
    console.log(movie, 'MOVIE');
  return (
    <div>
    <h3>{movie.title}</h3>
    <video src={movie.videoUrl} controls poster={movie.poster} style={{width:"50%", height:"50%"}}></video>

    </div>
  )
}

export default DisplayMovie