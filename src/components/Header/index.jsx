import React from 'react';
import './style.css';

import camera from './img/camera.svg';

const Header = () => (
  <>
    <h1>
      <img className="logo" src={camera} alt="Logo" />
      Ve filmoTéce najdete...
    </h1>
  </>
);

export default Header;