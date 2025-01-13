// src/pages/Teachers.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/teachers.css';
import { teacherData } from '../data/teacherData';
import Footer from '../components/Footer';
import WhatsappContact from '../components/WhatsappContact';

const Teachers = () => {
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(true);

  const handleSelectProfessor = (professor) => {
    setSelectedProfessor(professor);
    navigate(`/teachers/${professor.name}`, { state: { professor } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animateScroll = () => {
    setAnimate(false)
  }

  const mobile = window.innerWidth<=768 ? false : true;

  return (
    <section className='teachers-container' onMouseEnter={animateScroll}>
      <Header />
      <h3>Professores</h3>
      <div className={ (animate === true && mobile === true) ? 'hidden' : 'line-red'}></div>
      <div className='phrase-title'><p>Os melhores e mais expêrientes professores!!</p></div>
      <div className='teachers-list'>
        {teacherData[0].aula.map((professor) => (
            <div key={professor.name} className='teachers-item'>
              <div onClick={() => handleSelectProfessor(professor)}>
                <img src={professor.image} alt={professor.name} />
                <h5>{professor.name}</h5>
                <p>{professor.instrument}</p>
              </div>
            </div>
        ))}
        {teacherData[1].aula.map((professor) => (
            <div key={professor.name} className='teachers-item'>
              <div onClick={() => handleSelectProfessor(professor)}>
                <img src={professor.image} alt={professor.name} />
                <h5>{professor.name}</h5>
                <p>{professor.instrument}</p>
              </div>
            </div>
        ))}
      </div>
      <Footer />
      <WhatsappContact />
    </section>
  );
};

export default Teachers;
