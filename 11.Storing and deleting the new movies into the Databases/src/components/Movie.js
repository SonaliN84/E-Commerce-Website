import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  console.log(typeof props.id)
   let a=props.id;
 
  const deleteMovieHandler=(event)=>{
    fetch(`https://react-ecommerceproject-default-rtdb.firebaseio.com/movies/${a}.json`,{
      method:'DELETE'
    })
    let child=event.target.parentElement;
    let parent=child.parentElement;
    parent.removeChild(child)
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteMovieHandler}>delete</button>
    </li>
  );
};

export default Movie;
