import React from 'react';
import '../styles/components/header.css'


const HeaderOther = () => {

  return (
    <>
        <header className="admin-header">
            <h2>JavangoJango</h2>
            <ul>
            <li><a href="#">Músicas</a></li>
            <li><a href="#">Professores</a></li>
            <li><a href="admin/create" >Cadastrar Aluno</a></li>
            </ul>
        </header>
        <div className="red-line"></div>
    </>
  );
};

export default HeaderOther;