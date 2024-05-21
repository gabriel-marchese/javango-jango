import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/userHome.css'
import HeaderUser from '../components/HeaderUser';
import Icon from '../images/icon-facebook.png';
import Logo from '../images/logo-javango.png'
import Insta from '../images/icon-instagram.png';
import Metro from '../images/icon-metronomo.png';
import Nota from '../images/icon-nota.png';
import Perfil from '../images/icon-perfil.png';
import { requestData } from '../services/requests';

const UserHome = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Faz a chamada para o backend para obter os dados
        const result = await requestData('/home');
        setData(result);
        const id = localStorage.getItem('id');
        setId(id)
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, [])


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
                  <option value="Todos">Todos</option>
                  <option value="Guitarra">Guitarra</option>
                  <option value="Baixo">Baixo</option>
                  <option value="Bateria">Bateria</option>
                </select>
              </form>
              <div>
              {data.map(item => (
                <Link to={`/music/${item.id}`} className='link-music' key={item.id}>
                  <img src={Logo} alt="" className='logo-music'/>
                  <div className='music-list-item'>
                    <p>{ item.band }</p>
                    <p>{ item.music }</p>
                    <p>{ item.instrument }</p>
                  </div> 
                  <img src={Nota} alt="" className='logo-music'/>
                </Link>
              ))}
              </div>
            </section>
        </div>
        <aside>
            <img className='logo-icon' src={ Logo } alt="" />

            <div>
              
              <Link to={`/user/${id}`}><img src={ Perfil } alt="" />Perfil</Link>
              <img className='aside-icon' src={ Metro } alt="" />
              <p>Metrônomo</p>
              <img className='aside-icon' src={ Nota } alt="" />
              <p>Músicas</p>
              <p>Salvas</p>
            </div>

            <div>
              <a href="https://www.facebook.com/JavangoJango/" target="_blank" rel="noreferrer" ><img className='aside-icon' src={ Icon } alt="" /></a>
              <a href="https://www.instagram.com/javangojango/" target="_blank" rel="noreferrer"><img className='aside-icon' src={ Insta } alt="" /></a>
            </div>
        </aside>
    </section>
  )
}

export default UserHome;