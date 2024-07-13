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
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18055.419580894573!2d-46.63151452419303!3d-23.474786254011445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7d5959982a1%3A0xcfd138e8a5a3c99c!2sJavango%20Jango!5e0!3m2!1spt-BR!2sbr!4v1720887267853!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  ) 
}

export default Maps;