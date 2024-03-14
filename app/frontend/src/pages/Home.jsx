import React from 'react';
import Header from '../components/Header';
import '../styles/pages/home.css'
import SideImage from '../images/side-image-guitar.jpg'
import Footer from '../components/Footer';
import CursoSection from '../components/CursoSection';
import ImageBackground from '../components/ImageBackground';
import Place from '../components/Place';
import Maps from '../components/Maps';

const Home = () => {
  
  return (
    <>
     <Header />
     <main>
       <h2>JAVANGO<span className="stroke-text">JANGO</span></h2>
       <div>
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
     <Maps />
     <Footer />
    </>
  );
};

export default Home;