import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Image from '../images/image-background.jpg';
import Nota from '../images/icon-nota.png';
import WhatsappContact from '../components/WhatsappContact';
import '../styles/pages/structure.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Structure = () => {
  const [animate, setAnimate] = useState(true);
  const [animateV, setAnimateV] = useState(true);

  const mobile = window.innerWidth<=768 ? false : true;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animateScroll = () => {
    setAnimate(false)
  }

  const animateScrollV = () => {
    setAnimateV(false)
  }
  return (
    <section className='structure-section' onMouseEnter={animateScrollV}>
        <Header />
        <div className='title-structure'>
          <h2>Nosso</h2>
          <h2>Espaço</h2>
          <div className={ (animateV === true && mobile === true) ? 'hidden' : 'line-red-v'}></div>
        </div>
        <div>
          <img src={ Image } alt="" />
        </div>
        <div className="animated-image">
          <img src={ Nota } alt="" />
        </div>
        <div className="animated-image1">
          <img src={ Nota } alt="" />
        </div>
        <div className="animated-image2">
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
        <section className='text-structure' onMouseEnter={animateScroll}>
          <div>
            <h2>Conheça um Pouco</h2>
            <div className={ (animate === true && mobile === true) ? 'hidden' : 'line-red'}></div>
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
        <Link to="/contact" replace={true}>Marque sua aula experimental!</Link>
        <Footer />
        <WhatsappContact />
    </section>
  );
};

export default Structure;