import React from 'react';
import Header from '../components/Header';
import Image from '../images/image-background.jpg';
import Nota from '../images/icon-nota.png';

import '../styles/pages/structure.css';
import Footer from '../components/Footer';


const Structure = () => {

  return (
    <section className='structure-section'>
        <Header />
        <div className='title-structure'>
          <h2>Nosso</h2>
          <h2>Espaço</h2>
          <div></div>
        </div>
        <div>
          <img src={ Image } alt="" />
        </div>
        <div>
          <img src={ Nota } alt="" />
        </div>
        <div>
          <img src={ Nota } alt="" />
        </div>
        <div>
          <img src={ Nota } alt="" />
        </div>
        
        <section className='grid-back'>
          <div className='grid-collection'>
            <img src={ Image } alt="" />
            <img src={ Image } alt="" />
            <img src={ Image } alt="" />
            <img src={ Image } alt="" />
            <img src={ Image } alt="" />
          </div>
        </section>
        <section className='text-structure'>
          <div>
            <h2>Conheça um Pouco</h2>
            <div></div>
            <p>Nosso espaço conta com uma recepação e 5 salas de aula... Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus itaque tempora aspernatur!</p>
            <br />
            <p>Deserunt enim in adipisci suscipit perferendis eos quaerat. Ipsam minima tempora et error? Quibusdam reprehenderit voluptates consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea numquam consequuntur dolor molestias. Rerum nemo in iste quia totam ipsum doloremque, delectus consectetur? Incidunt accusantium delectus magni vero enim.</p>
          </div>
          <div>
            <img src={ Image } alt="" />
            <img src={ Image } alt="" />
            <img src={ Image } alt="" />
          </div>
        </section>
        <a href="">Marque sua aula experimental!</a>
        <Footer />
    </section>
  );
};

export default Structure;