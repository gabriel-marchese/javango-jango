// src/pages/Teachers.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/courses.css';
import { courseData } from '../data/couseData';
import Footer from '../components/Footer';
import WhatsappContact from '../components/WhatsappContact';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(true);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    navigate(`/courses/${course.instrument}`, { state: { course } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animateScroll = () => {
    setAnimate(false)
  }

  const mobile = window.innerWidth<=768 ? false : true;

  return (
    <section className='courses-container' onMouseEnter={animateScroll}>
      <Header />
      <h3>Aulas</h3>
      <div className={ (animate === true && mobile === true) ? 'hidden' : 'line-red'}></div>
      <div className='phrase-title'><p>Aulas particulares pensadas para você!!</p></div>
      <div className='courses-list'>
        {courseData.map((course) => (
            <div key={course.name} className='course-item'>
              <div onClick={() => handleSelectCourse(course)}>
                <img src={course.image} alt={course.name} />
                <h5>{course.instrument}</h5>
                <p>{course.name}</p>
              </div>
            </div>
        ))}
      </div>
      <Footer />
      <WhatsappContact />
    </section>
  );
};

export default Courses;
