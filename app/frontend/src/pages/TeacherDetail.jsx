// src/pages/TeacherDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/pages/teacherDetail.css';

const TeacherDetail = () => {
  const location = useLocation();
  const { professor } = location.state || {};

  if (!professor) {
    return <div>Selecione um professor para ver os detalhes</div>;
  }

  return (
    <div className='course-detail'>
      <Header />
      <div></div>
      <div>
        <img src={professor.image} alt={professor.name} />
        <h1>{professor.fullname}</h1>
      </div>
      <div className='course-description'>
        <h2>Quem sou eu ?</h2>
        <p>{professor.description}</p>
      </div>
      <div className='video-description'>
        <iframe width="900" height="450" src="https://www.youtube.com/embed/-R0UYHS8A_A" title="Afternoon Jazz 🎷 [jazz lofi]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <a href="">Marque sua aula experimental!</a>
      <Footer />
    </div>
  );
};

export default TeacherDetail;
