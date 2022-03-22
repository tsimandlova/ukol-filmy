import React from 'react';
import './style.css';

import Movie from '../Movie';

const MovieLists = ({movies}) => {
  return (
    <>
    {
      movies.map(
        movie => (
          <Movie key={movie.id} title={movie.title} poster={movie.poster} year={movie.year} rating={movie.rating} director={movie.director} genre={movie.genre}/>
        )
      ) 
    }
    </>
  )
};

export default MovieLists;