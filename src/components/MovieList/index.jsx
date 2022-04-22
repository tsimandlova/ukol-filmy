import React from 'react';
import './style.css';

import Movie from '../Movie';

const MovieList = ({movies}) => {
  return (
    <>
    {
      movies.map(
        movie => (
          <Movie 
            key={movie.id} 
            title={movie.title} 
            poster={movie.poster} 
            year={movie.year} 
            rating={movie.rating} 
            director={movie.director} 
            genre={movie.genre}
            cast={movie.cast}
          />
        )
      ) 
    }
    </>
  )
};

export default MovieList;