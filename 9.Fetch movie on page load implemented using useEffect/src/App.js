import React, { useCallback, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import { useState} from 'react';
import './App.css';

function App() {
const [isLoading,setIsLoading]=useState(false)
const[movies,setMovies]=useState([])
const [error,setError]=useState(null)
const [call,setCall]=useState(false)
const [cancel,setCancel]=useState(false)
const fetchMoviesHandler=useCallback(async()=>{
  // async  function fetchMoviesHandler()
  // { 
  
    
    // fetch('https://swapi.dev/api/films')
    // .then(response=>{
    //  return  response.json();
    // })
    // .then(data=>{
    
     setIsLoading(true);
     setError(null)
     try{
      const response=await fetch('https://swapi.dev/api/film')
       
      if(!response.ok){
        throw new Error('something went wrong!.....RETRYING')
      
    }
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
      }
      catch(error){
        setError(error.message)
        console.log(error)
        setTimeout(()=>{
          setCall(!call)
        },5000)
        
        
      }
      setIsLoading(false)
    
    // })
  // }
  },[call])

  function calling(){
    setCall(!call)
    setCancel(false)
  }
  function cancelHandler(){
    setCancel(true)
    content=<p>No Movies Found</p>;
  }
  
useEffect(()=>{
  console.log("cancel",cancel)
  if(cancel===false)
  {
  fetchMoviesHandler()
   }
},[call,cancel])


   let content = <p>No Movies Found</p>;

   if(movies.length>0){
    content=<MoviesList movies={movies} />;
   }
   
   if(error){
    content=<p>{error}<p><button onClick={cancelHandler}>cancel Retrying</button></p></p>;
   }
   if(cancel==true)
   {
    content=<p>No Movies Found</p>;
   }
   if(isLoading){
    content=<p>Loading....</p>;
   }
  return (
    <React.Fragment>

    {console.log(call)}
      <section>
        <button onClick={calling}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length==0 && !error && <p>No Movies Found</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading....</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
