import React, { useState } from 'react';
import '../styles/components/header.css'
import Logo from '../images/logo-javango.png'
import { Navigate, Link } from 'react-router-dom';

const Header = () => {
  const [goLogin, setGoLogin] = useState(false);

  if (goLogin === true) return <Navigate to="/login" />;

  return (
    <header>
        <nav>
            <Link to="/"><img src={ Logo } alt="Logo da escola de música Javango Jango" /></Link>
            <div className='header-list-itens'>
                <ul>
                    <li><Link to="/history">NOSSA HISTÓRIA</Link></li>
                    <li><Link to="/courses">CURSOS</Link></li>
                    <li><Link to="/structure">ESTRUTURA</Link></li>
                    <li><Link to="/teachers">PROFESSORES</Link></li>
                    <li><Link to="/events">EVENTOS</Link></li>
                    <li><Link to="/contact">CONTATOS</Link></li>
                </ul>
                {/* <div>
                    <button type='button' onClick={ () => setGoLogin(true) }>Entrar</button>
                </div>          */}
            </div>
        </nav>
    </header>
  );
};

export default Header;