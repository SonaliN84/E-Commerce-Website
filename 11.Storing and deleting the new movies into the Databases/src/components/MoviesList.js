import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  // props.movies.map((movie) =>{console.log(movie.id)})
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
          
        <Movie
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
