import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from '../images/side-image-guitar.jpg';
import Palheta from '../images/palheta_vermelha.png';
import Guitarra from '../images/violao-vermelho.png';
import '../styles/pages/history.css';
import WhatsappContact from '../components/WhatsappContact';
import { Link } from 'react-router-dom';


const History = () => {
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
    <section className='history-section' onMouseEnter={animateScrollV}>
        <Header />
        <div className='title-history'>
          <h2>Nossa</h2>
          <h2>História</h2>
          <div className={ (animateV === true && mobile === true) ? 'hidden' : 'line-red-v'}></div>
        </div>
        <div><img src={ Palheta } alt="" /></div>
        <div>
          <h3>Nós amamos música e ensinamos por amor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, commodi sed ex deleniti, exercitationem quia inventore vel odio doloribus praesentium delectus enim rerum nobis tempore? Molestias perspiciatis reiciendis cumque animi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis magni sint numquam pariatur deserunt nobis sed eos quis, possimus corrupti quasi at voluptates eligendi dolores maiores rem officiis, repudiandae dolor?</p>
        </div>
        <div></div>
        <div><img src={ Guitarra } alt="" /></div>
        <Link to="/contact" replace={true} >Marque sua aula experimental!</Link>
        <div className='video-content'>
          <iframe width="900" height="450" src="https://www.youtube.com/embed/-R0UYHS8A_A" title="Afternoon Jazz 🎷 [jazz lofi]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='javango' onMouseEnter={animateScroll}>
          <div>
            <h2>QuemSomos</h2>
            <div className={ (animate === true && mobile === true) ? 'hidden' : 'line-red'}></div>
            <h3>Javango<span>Jango</span></h3>
            <p>JavangoJango começou como uma banda de pessoas que só gostavam de música, e se tornou o maior projetos de nossas vidas. <br /><br /> A Javango para nós vai muito alem de uma escola de música, tratasse de um espaço para conhecer pessoas, acolher, dar muita risada e isso tudo, é a musíca que proporciona. A música está além de tocar um instrumento, aqui na Javango, vivemos música.</p>
          </div>
          <div>
            <img src={ Image } alt="" />
          </div>
        </div>
        <Footer />
        <WhatsappContact />
    </section>
  );
};

export default History;