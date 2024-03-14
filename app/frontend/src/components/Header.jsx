import React, { useState } from 'react';
import '../styles/components/header.css'
import Logo from '../images/logo-javango.jpg'
import { Navigate } from 'react-router-dom';

const Header = () => {
  const [goLogin, setGoLogin] = useState(false);

  if (goLogin === true) return <Navigate to="/login" />;

  return (
    <header>
        <div>
            <nav>
                <img src={ Logo } alt="Logo da escola de música Javango Jango" />
                <div className='header-list-itens'>
                    <ul>
                        <li><a href="#"></a>NOSSA HISTÓRIA</li>
                        <li><a href="#"></a>CURSOS</li>
                        <li><a href="#"></a>ESTRUTURA</li>
                        <li><a href="#"></a>PROFESSORES</li>
                        <li><a href="#"></a>EVENTOS</li>
                        <li><a href="#"></a>CONTATOS</li>
                    </ul>
                    {/* <div>
                        <button type='button' onClick={ () => setGoLogin(true) }>Entrar</button>
                    </div>          */}
                </div>
            </nav>
            <div>
                <p>UMA ESCOLA DE</p>
                <p>MUSICA QUE PENSA</p>
                <p>SEMPRE EM <span className='text-emphasis'>VOCÊ!</span></p>
            </div>  
        </div>
    </header>
  );
};

export default Header;