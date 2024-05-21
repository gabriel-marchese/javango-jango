import React from 'react';
import Header from '../components/Header';
import '../styles/pages/home.css'
import SideImage from '../images/side-image-guitar.jpg'
import Footer from '../components/Footer';
import CursoSection from '../components/CursoSection';
import ImageBackground from '../components/ImageBackground';
import Place from '../components/Place';
import Maps from '../components/Maps';
import Baqueta from '../images/baqueta_vermelha.png';
import Violao from '../images/violao-vermelho.png';
import Palheta from '../images/palheta_vermelha.png';
import Teachers from '../components/Teachers';
import Introduction from '../components/Introduction';

const Home = () => {
  
  return (
    <>
     <Header />
     <Introduction />
     <main>
       <h2>JAVANGO<span className="stroke-text">JANGO</span></h2>
       <div className='fundo-imagem'>
         <img src={ Palheta } alt="" />
       </div>
       <div className='fundo-imagem2'>
         <img src={ Violao } alt="" />
       </div>
       <div className='fundo-imagem3'>
         <img src={ Baqueta } alt="" />
       </div>
       <div className='fundo-imagem4'>
         <img src={ Baqueta } alt="" />
       </div>
       <div className='section-home'>
          <div className='text-section-home'>
            <h2>Método de Estudos</h2>
            <p>Lorem ipsum dolor, sit amet co nsectetur adipisicing elit. Ut sit facilis sint nulla voluptates nam eum, est, blanditiis explicabo dolore natus ipsa magnam perferendis officiis dolorem aspernatur ea cupiditate quam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vel quaerat dolorem illo consequuntur repellendus consectetur harum sit, non ullam nesciunt esse maxime, voluptate quam voluptates odio illum, quis et!</p>
          </div>
          <img src={ SideImage } alt="Imagem de um garoto tocando guitarra" />
       </div>
     </main>
     <CursoSection />
     <ImageBackground />
     <Place />
     <Teachers />
     <Maps />
     <Footer />
    </>
  );
};

export default Home;