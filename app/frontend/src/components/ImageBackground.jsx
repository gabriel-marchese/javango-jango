import React from 'react';
import '../styles/components/imageBackground.css'
import { Link } from 'react-router-dom';

const ImageBackground = () => {

  return (
    <section className='image-parallax'>
        <h3>Tocar com os amigos é a <span className='text-emphasis'>melhor</span>  parte da <span className='text-emphasis'>música</span></h3>
        <Link to="/contact" replace={true}>VENHA TOCAR COM A GENTE!!</Link>
    </section>
  ) 
}

export default ImageBackground;