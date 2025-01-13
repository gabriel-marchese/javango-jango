import React, { useState } from 'react';
import '../styles/components/teachers.css'
import { teacherData } from '../data/teacherData';
import Seta from '../images/seta-direita1.png';
import Nota from '../images/nota-musical.png';
import Circle from '../images/circulo1.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Teachers = () => {
  const [selected, setSelected] = useState(0);
  const tdLength = teacherData.length;
  const [animate, setAnimate] = useState(true);

  const transition = {type: 'spring', duration: 3}

  const leftArrowMove = () => {
    selected === 0
        ? setSelected(tdLength -1)
        : setSelected((prev) => prev -1);
  }

  const rightArrowMove = () => {
    selected === tdLength - 1
        ? setSelected(0)
        : setSelected((prev) => prev +1);
  }

  const animateScroll = () => {
    setAnimate(false)
  }

  const mobile = window.innerWidth<=768 ? false : true;

  return (
    <section className='teachers-section' onMouseEnter={animateScroll}>
        <h3>Professores</h3>
        <div className={ (animate === true && mobile === true) ? 'hidden' : 'line-red'}></div>
        <div>
            <img src={ Seta } onClick={leftArrowMove} alt="" />
            <motion.div className='teacher-display'
            key={selected}
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={{transition}}>
                {
                    teacherData[selected].aula.map((teacher) => (
                        <div className='teacher'>
                            <img src={ teacher.image } alt="" />
                            <h4>{ teacher.name }</h4>
                            <p>{ teacher.instrument }</p>
                        </div>
                    ))
                }
            </motion.div>
            <img src={ Seta } onClick={rightArrowMove} alt="" />
        </div>
        <div className='teachers-change'>
            <img src={ selected === 0 ? Nota : Circle } onClick={leftArrowMove} alt="" />
            <img src={ selected === 1 ? Nota : Circle } onClick={rightArrowMove}alt="" />
        </div>
        <Link to="/teachers">Veja Mais</Link>
    </section>
  ) 
}

export default Teachers;