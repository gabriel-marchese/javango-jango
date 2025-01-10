import React from 'react';
import '../styles/components/footer.css'
import Instagram from '../images/icon-instagram.png'
import Facebook from '../images/icon-facebook.png'

const Footer = () => {

  return (
    <footer>
        <div>
            <p>JavangoJango</p>
            <div className='social-medias'>
                <a href="https://www.facebook.com/JavangoJango/" target="_blank" rel="noopener noreferrer"><img src={ Facebook } alt="Icone que leva para o facebook da javango jango" /></a>
                <a href="https://www.instagram.com/javangojango/" target="_blank" rel="noopener noreferrer"><img src={ Instagram } alt="Icone que leva para o instagram da javango jango" /></a>
            </div>
        </div>
        <div></div>
        <section>
          <div>
            <h4>Localização</h4>
            <p>R. Álvaro Gomes, 28 - Mandaqui</p>
          </div>
          <div>
            <h4>WhatsApp</h4>
            <p>(11)970841982</p>
          </div>
          <div>
            <h4>Funcionamento</h4>
            <p>Seg a Sab: 8-21h</p>
          </div>
        </section>
        <div></div>
        <p>Site desenvolvido por Gabriel Marchese</p>
    </footer>
  ) 
}

export default Footer;