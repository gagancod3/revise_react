import movies from '../data/Movies.json';
 
export const useMovie=(movieName)=>{
  const movieDetails=movies.find(movie=>movie.title===movieName)
  return movieDetails || null;
}