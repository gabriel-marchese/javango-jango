import React from 'react';
import '../styles/components/place.css'
import imagem1 from '../images/image-background2.jpg'
import imagem2 from '../images/guitarra.jpg'

const Place = () => {

  return (
    <section className='our-place'>
        <div className='place-background'></div>
        <h2>MÚSICA, AMIGOS E MAIS...</h2>
        <div>
            <img src={ imagem1 } alt="" />
        </div>
        <div>
            <img src={ imagem2 } alt="" />
            <img src={ imagem2 } alt="" />
            <img src={ imagem2 } alt="" />
        </div>
        <a href="#">Veja Mais</a>
    </section>
  ) 
}

export default Place;