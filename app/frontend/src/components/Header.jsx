import React from 'react';
import '../styles/components/header.css'

const Header = () => {

  return (
    <header>
        <nav>
            <h1>JavangoJango</h1>
            <div className='header-list-itens'>
                <ul>
                    <li>Aulas</li>
                    <li>Quero ser um Aluno</li>
                    <li>Saiba Mais</li>
                </ul>
                <div>
                    <button>Entrar</button>
                </div>         
            </div>
        </nav>
    </header>
  );
};

export default Header;