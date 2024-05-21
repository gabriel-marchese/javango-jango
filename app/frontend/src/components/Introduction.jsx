import React from 'react';
import '../styles/components/introduction.css';

const Introduction = () => {

  return (
    <section className='introduction-section'>
        <div>
            <p>UMA ESCOLA DE</p>
            <p>MUSICA QUE PENSA</p>
            <p>SEMPRE EM <span className='text-emphasis'>VOCÊ!</span></p>
        </div>  
    </section>
  );
};

export default Introduction;