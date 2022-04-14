import React from 'react';
import './hero.scss';
import Image from "../../assets/images/placeholder.svg";

function hero(props) {
  return (
    <div className='hero'>
      <div className='hero__text'>
        <h1>Hi, I'm Simon!</h1>
        <h2>Web developer</h2>
      </div>
      <div className='hero__img-box'>
        <img src={Image} alt="illustration of me" className='hero__img'></img>
      </div>
    </div>
  );
}

export default hero;