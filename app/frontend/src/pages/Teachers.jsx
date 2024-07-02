// src/pages/Teachers.js
import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/teachers.css';
import { teacherData } from '../data/teacherData';
import Footer from '../components/Footer';

const Teachers = () => {
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const navigate = useNavigate();

  const handleSelectProfessor = (professor) => {
    setSelectedProfessor(professor);
    navigate(`/teachers/${professor.name}`, { state: { professor } });
  };

  return (
    <section className='teachers-container'>
      <Header />
      <h3>Professores</h3>
      <div></div>
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
    </section>
  );
};

export default Teachers;
