import React from 'react';
import '../styles/components/cursoSection.css'
import FundoImagem from '../images/Fundo_Palheta.png';
import FundoImagem1 from '../images/Fundo_Palheta_1.png';
import FundoImagem2 from '../images/Fundo_Palheta_2.png';
import FundoImagem3 from '../images/Fundo_Palheta_3.png';
import Bateria from '../images/foto_bateria_palheta.png';
import Guitarra from '../images/foto_guitarra_palheta.png';
import { Link } from 'react-router-dom';

const CursoSection = () => {

  return (
    <div className='cursos-content'>
        <div className='title-cursos'>
            <h2>Cursos</h2>
            <div></div>
        </div>
        <section className='cursos-section'>
            <div>
                <div>
                    <div className='color-ground'></div>
                    <h2>Bateria</h2>
                </div>
                <img src={ FundoImagem } alt="Palheta Pontilhada" />
                <img src={ Bateria } alt="Foto de uma bateria acústica em forma de palheta" />
            </div>
            <div>
                <div>
                    <div className='color-ground'></div>
                    <h2>Guitarra</h2>
                </div>
                <img src={ FundoImagem1 } alt="Palheta Pontilhada" />
                <img src={ Guitarra } alt="Foto de uma bateria acústica em forma de palheta" />
            </div>
            <div>
                <div>
                    <div className='color-ground'></div>
                    <h2>Bateria</h2>
                </div>
                <img src={ FundoImagem2 } alt="Palheta Pontilhada" />
                <img src={ Bateria } alt="Foto de uma bateria acústica em forma de palheta" />
            </div>
            <div>
                <div>
                    <div className='color-ground'></div>
                    <h2>Guitarra</h2>
                </div>
                <img src={ FundoImagem3 } alt="Palheta Pontilhada" />
                <img src={ Guitarra } alt="Foto de uma bateria acústica em forma de palheta" />
            </div>
            <div>
                <div>
                    <div className='color-ground'></div>
                    <h2>Bateria</h2>
                </div>
                <img src={ FundoImagem } alt="Palheta Pontilhada" />
                <img src={ Bateria } alt="Foto de uma bateria acústica em forma de palheta" />
            </div>
            <div>
                <div>
                    <div className='color-ground'></div>
                    <h2>Guitarra</h2>
                </div>
                <img src={ FundoImagem } alt="Palheta Pontilhada" />
                <img src={ Guitarra } alt="Foto de uma bateria acústica em forma de palheta" />
            </div>
        </section>
        <Link to="/courses" replace={true}>Saiba Mais</Link>
    </div>
  ) 
}

export default CursoSection;