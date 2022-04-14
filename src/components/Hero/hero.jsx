import React from 'react';
import './hero.scss';
import Image from "../../assets/images/placeholder.svg";

function hero(props) {
  return (
    <div className='hero'>
      <div className='hero__text'>
        <h1>Hello!</h1>
        <h2>I'm Simon, a web developer</h2>
      </div>
      <div className='hero__img-box'>
        <img src={Image} alt="illustration of me" className='hero__img'></img>
      </div>
    </div>
  );
}

export default hero;