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
                        <li>Aulas</li>
                        <li>Quero ser um Aluno</li>
                        <li>Saiba Mais</li>
                    </ul>
                    <div>
                        <button type='button' onClick={ () => setGoLogin(true) }>Entrar</button>
                    </div>         
                </div>
            </nav>
            <hr />
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur <span className='text-emphasis'>adipisicing</span> elit. Explicabo provident vero sint, suscipit, distinctio tempore laboriosam ea cumque blanditiis quaerat natus mollitia quod autem dolorum fugiat, <span className='text-emphasis'>magnam dignissimos</span> praesentium soluta!</p>
            </div>  
        </div>
    </header>
  );
};

export default Header;