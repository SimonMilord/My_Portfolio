import React, {useEffect, useRef} from 'react';
import './hero.scss';
// import Image from "../../assets/images/placeholder.svg";
import Illustration from '../../assets/images/illustration1.svg';
import lottie from 'lottie-web';


function Hero(props) {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/images/illustration.json')

    })
  }, [])

  return (
    <div className='hero'>
      <div className='hero__text'>
        <h1>Hi, I'm Simon!</h1>
        <h2>Web developer</h2>
      </div>
      <div className='hero__img-box'>
        {/* <img src={Illustration} alt="illustration of me" className='hero__img'></img> */}
        <div className='hero__img' ref={container}></div>
      </div>
    </div>
  );
}

export default Hero;



