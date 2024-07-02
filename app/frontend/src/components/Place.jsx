import React from 'react';
import '../styles/components/place.css'
import imagem1 from '../images/image-background2.jpg'
import imagem2 from '../images/guitarra.jpg'
import { Link } from 'react-router-dom';

const Place = () => {

  return (
    <section className='our-place'>
        <div className='our-place-section'>
          <div className='place-background'></div>
          <h2>ESTRUTURA, CONFORTO, MÚSICA...</h2>
          <div>
              <img src={ imagem1 } alt="" />
          </div>
        </div>
        <div>
            <img src={ imagem2 } alt="" />
            <img src={ imagem2 } alt="" />
            <img src={ imagem2 } alt="" />
        </div>
        <Link to="/structure">Veja Mais</Link>
    </section>
  ) 
}

export default Place;