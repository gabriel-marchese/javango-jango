// src/pages/TeacherDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/pages/courseDetail.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CourseDetail = () => {
  const location = useLocation();
  const { course } = location.state || {};

  if (!course) {
    return <div>Selecione um professor para ver os detalhes</div>;
  }

  return (
    <div className='course-detail'>
      <Header />
      <div></div>
      <div>
        <img src={course.image} alt={course.name} />
        <h1>{course.instrument}</h1>
      </div>
      <div className='course-description'>
        <h2>Como é a aula ?</h2>
        <p>{course.description}</p>
      </div>
      <div className='video-description'>
        <iframe width="900" height="450" src="https://www.youtube.com/embed/-R0UYHS8A_A" title="Afternoon Jazz 🎷 [jazz lofi]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <a href="">Marque sua aula experimental!</a>
      <Footer />
    </div>
  );
};

export default CourseDetail;
