import React from 'react';
import '../styles/components/maps.css'
import Localiza from '../images/localiza.png'
import Seta from '../images/seta.png'

const Maps = () => {

  return (
    <section className='maps'>
        <div>
          <h3>Como chegar aqui?</h3>
          <img src={ Localiza } alt="" />
        </div>
        <img src={ Seta } alt="" />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.6726455647836!2d-46.633723538806876!3d-23.47465377732182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7d5959982a1%3A0xcfd138e8a5a3c99c!2sJavango%20Jango!5e0!3m2!1spt-BR!2sbr!4v1710379452268!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  ) 
}

export default Maps;