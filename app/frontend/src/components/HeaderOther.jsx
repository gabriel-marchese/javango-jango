import React from 'react';
import '../styles/components/header.css'


const HeaderOther = () => {

  return (
    <>
        <header className="admin-header">
            <h2><a href="/">JavangoJango</a></h2>
            <ul>
            <li><a href="music/create">Músicas</a></li>
            <li><a href="professors">Professores</a></li>
            <li><a href="admin/create" >Cadastrar Aluno</a></li>
            </ul>
        </header>
        <div className="red-line"></div>
    </>
  );
};

export default HeaderOther;