import React from 'react';
import '../styles/components/headerUser.css'


const HeaderUser = () => {

  return (
    <section className='user-section-header'>
        <header className="admin-header">
            <h2>JavangoJango</h2>
            <ul>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Músicas</a></li>
            <li><a href="/login" >Sair</a></li>
            </ul>
        </header>
        <div className="red-line"></div>
    </section>
  );
};

export default HeaderUser;