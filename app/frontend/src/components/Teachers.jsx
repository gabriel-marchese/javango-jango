import React, { useState } from 'react';
import '../styles/components/teachers.css'
import { teacherData } from '../data/teacherData';
import Seta from '../images/seta-direita1.png';
import Nota from '../images/nota-musical.png';
import Circle from '../images/circulo1.png';

const Teachers = () => {
  const [selected, setSelected] = useState(0);
  const tdLength = teacherData.length;


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

  return (
    <section className='teachers-section'>
        <h3>Professores</h3>
        <div></div>
        <div>
            <img src={ Seta } onClick={leftArrowMove} alt="" />
            {
                teacherData[selected].aula.map((teacher) => (
                    <div className='teacher'>
                        <img src={ teacher.image } alt="" />
                        <h4>{ teacher.name }</h4>
                        <p>{ teacher.instrument }</p>
                    </div>
                ))
            }
            <img src={ Seta } onClick={rightArrowMove} alt="" />
        </div>
        <div className='teachers-change'>
            <img src={ selected === 0 ? Nota : Circle } alt="" />
            <img src={ selected === 1 ? Nota : Circle } alt="" />
        </div>
        <a href="#">Veja Mais</a>
    </section>
  ) 
}

export default Teachers;