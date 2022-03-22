import React from 'react';
import './style.css';

const Movie = ({title, poster, year, rating, director, genre, cast}) => (
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
      <h3>V hlavních rolích</h3>
      <div className="cast">
        {cast}
      </div>
    </div>
  </div>
);

export default Movie;