import React from 'react';
import { render } from 'react-dom';
import './style.css';

import movies from './movies.js';

import Header from './components/Header';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <MovieList movies={movies} />
      </div>
    </>
  )
};

render(<App />, document.querySelector('#app'));
