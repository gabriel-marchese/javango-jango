import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/cursoSection.css';
import { courseData } from '../data/couseData';
import { Link } from 'react-router-dom';

const CursoSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(true);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    navigate(`/courses/${course.instrument}`, { state: { course } });
  };

  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`course-${index}`);
    const fundo = document.getElementById("fundo-palheta");
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left; // Posição X do mouse dentro do card
    const y = e.clientY - rect.top;  // Posição Y do mouse dentro do card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    const rotateX = deltaY * 10; // Rotação no eixo X
    const rotateY = -deltaX * 10; // Rotação no eixo Y

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (index) => {
    const card = document.getElementById(`course-${index}`);
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const animateScroll = () => {
    setAnimate(false)
  }

  const mobile = window.innerWidth<=768 ? false : true;

  return (
    <div className='cursos-content' onMouseEnter={animateScroll}>
      <div className='title-cursos'>
        <h2>Cursos</h2>
        <div className={ (animate === true && mobile === true) ? 'hidden' : 'line-red'}></div>
      </div>
      <section className='cursos-section'>
        {courseData.map((course, index) => (
          <div
            key={course.name}
            id={`course-${index}`}
            onClick={() => handleSelectCourse(course)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="course-card"
          >
            <div>
              <div className='color-ground'></div>
              <h2>{course.instrument}</h2>
            </div>
            <img src={course.fundo} alt="Palheta Pontilhada" />
            <img id="fundo-palheta" src={course.image} alt="Foto de um instrumento" />
          </div>
        ))}
      </section>
      <Link to="/courses" replace={true}>Saiba Mais</Link>
    </div>
  );
};

export default CursoSection;
