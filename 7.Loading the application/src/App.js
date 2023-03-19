import React from 'react';

import MoviesList from './components/MoviesList';
import { useState } from 'react';
import './App.css';

function App() {
const [isLoading,setIsLoading]=useState(false)
const[movies,setMovies]=useState([])

async  function fetchMoviesHandler()
{
  // fetch('https://swapi.dev/api/films')
  // .then(response=>{
  //  return  response.json();
  // })
  // .then(data=>{
   setIsLoading(true)
  const response=await fetch('https://swapi.dev/api/films')
  const data=await response.json(); 

    const transFormedMovies=data.results.map(movieData=>{
      return {
        id:movieData.episode_id,
        title:movieData.title,
        openingText:movieData.opening_crawl,
        releaseDate:movieData.release_date
      }
    })
    setMovies(transFormedMovies)
    setIsLoading(false)
  // })
}

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length==0 && <p>No Movies Found</p>}
        {isLoading && <p>Loading....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
