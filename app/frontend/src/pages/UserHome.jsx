import React, { useState, useEffect } from 'react';
import { requestLogin, setToken, requestData } from '../services/requests';
import { Navigate } from 'react-router-dom';
import '../styles/pages/userHome.css'
import HeaderUser from '../components/HeaderUser';
import Icon from '../images/icon-facebook.png';
import Logo from '../images/logo-javango.jpg'
import Insta from '../images/icon-instagram.png';
import Metro from '../images/icon-metronomo.png';
import Nota from '../images/icon-nota.png';
import Perfil from '../images/icon-perfil.png';

const UserHome = () => {
  return (
    <section className='user-home'>
        <div className='music-section'>
            <HeaderUser />
            <section className='music-list'>
              <form action="">
                <label htmlFor="">
                  <input type="text" />
                  <button>Buscar</button>
                </label>
                <select name="Instrumento" id="instrumento">
                  <option value="Guitarra">Guitarra</option>
                  <option value="Baixo">Baixo</option>
                  <option value="Bateria">Bateria</option>
                </select>
              </form>
              <ul>
                <li><img src={ Logo } alt="" />Music <img src={ Nota } alt="" /></li>
                <li><img src={ Logo } alt="" />Music <img src={ Nota } alt="" /></li>
                <li><img src={ Logo } alt="" />Music <img src={ Nota } alt="" /></li>
                <li><img src={ Logo } alt="" />Music <img src={ Nota } alt="" /></li>
                <li><img src={ Logo } alt="" />Music <img src={ Nota } alt="" /></li>
                <li><img src={ Logo } alt="" />Music <img src={ Nota } alt="" /></li>
              </ul>
            </section>
        </div>
        <aside>
            <img className='logo-icon' src={ Logo } alt="" />

            <div>
              <img src={ Perfil } alt="" />
              <p>Perfil</p>
              <img className='aside-icon' src={ Metro } alt="" />
              <p>Metrônomo</p>
              <img className='aside-icon' src={ Nota } alt="" />
              <p>Músicas</p>
              <p>Salvas</p>
            </div>

            <div>
              <a href="https://www.facebook.com/JavangoJango/" target="_blank"><img className='aside-icon' src={ Icon } alt="" /></a>
              <a href="https://www.instagram.com/javangojango/" target="_blank"><img className='aside-icon' src={ Insta } alt="" /></a>
            </div>
        </aside>
    </section>
  )
}

export default UserHome;