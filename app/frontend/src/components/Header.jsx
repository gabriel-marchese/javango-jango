import React, { useState } from 'react';
import '../styles/components/header.css'
import Logo from '../images/logo-javango.png'
import { Navigate, Link } from 'react-router-dom';
import menuIcon from '../images/icon-menu.svg';

const Header = () => {
  const [goLogin, setGoLogin] = useState(false);

  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  if (goLogin === true) return <Navigate to="/login" />;

  return (
    <header className='test-header'>
        <div class="header-container">
             <Link to="/"><img src={ Logo } alt="Logo da escola de música Javango Jango" /></Link>
        {
            (menuOpened === false && mobile === true) ?
            ( <div className='content-burguer' onClick={() => setMenuOpened(true)}><img className='buguer-menu' src={ menuIcon } alt="" /></div> ) :
            (  
            <nav>
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
            )
        }
        </div>
    </header>
  );
};

export default Header;