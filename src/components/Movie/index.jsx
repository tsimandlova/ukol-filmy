import React from 'react';
import './style.css';

import Actor from './../Actor';

const Movie = ({title, poster, year, rating, director, genre, cast}) => {
  return (
  <div className="movieContainer">
    <img className="poster" src={`/assets/${poster}`} alt="poster"></img>
    <div className="movieDescription">
      <div className="movie">
        <h2>{title}</h2><br/>
        <strong>Rok vydání:</strong> {year}<br/>
        <strong>Žánr:</strong> {genre}<br/>
        <strong>Režie:</strong> {director}<br/>
        <strong>Hodnocení:</strong> {rating}<br/>
      </div>
      <div className="cast">
        <h3>V hlavních rolích</h3>
        {
          cast.map(
            actor => (
              <Actor
                key={actor.name}
                name={actor.name}
                as={actor.as}
              />
            )
          )
        }
      </div>
    </div>
  </div>
)};

export default Movie;