import React from 'react';
import '../styles/components/whatsappContact.css'
import wapp from '../images/whatsapp.png'
import { Link } from 'react-router-dom';

const WhatsappContact = () => {

  return (
    <Link to="/contact" replace={true} className='wapp-contact'><img src={wapp} alt="Logo WhatsApp" /></Link>
  ) 
}

export default WhatsappContact;