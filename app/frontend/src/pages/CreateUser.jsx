import React, { useState } from 'react';
import HeaderOther from '../components/HeaderOther';
import { newUser, setToken } from '../services/requests';
import { Navigate } from 'react-router-dom';
import '../styles/pages/createUser.css';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('user');
  const [instrument, setInstrument] = useState('Guitarra');
  const [price, setPrice] = useState('');
  const [payment, setPayment] = useState('');
  const [created, isCreated] = useState(false);
 
  const createUser = async (event) => {
    const token = localStorage.getItem('token');
    setToken(token)
    event.preventDefault();
    console.log({ name, email, role: user, price,  payment, type: instrument, isActive: true });
    try {
      await newUser('/admin/create', { name, email, role: user, price,  payment, type: instrument, isActive: true });
      localStorage.removeItem('data');
      isCreated(true)
    } catch (error) {
      
    }
  };

  if (created === true) return <Navigate to="/admin"/>
  return (
    <section className='create-section'>
      <HeaderOther />
      <form action="post">
        <label htmlFor="">
          <p className='create-input'>Nome</p>
          <input 
            type="text"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
            placeholder="Ex. João da Silva"
          />
        </label>
        <label htmlFor="">
          <p className='create-input'>Email</p>
          <input 
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            placeholder="Ex. joao@gmail.com"
          />
        </label>
        <div className='option-div'>
          <label htmlFor="">
            <p>Usuário</p>
            <select className='select-create' onChange={ ({ target: { value } }) => setUser(value) } name="User" id="User">
                <option value="user">Aluno</option>
                <option value="admin">Professor</option>
            </select>
          </label>
          <label htmlFor="">
            <p>Intrumento</p>
            <select className='select-create' onChange={ ({ target: { value } }) => setInstrument(value) } name="Instrumento" id="Instrumento">
                <option value="Guitarra">Guitarra</option>
                <option value="Bateria">Bateria</option>
                <option value="Baixo">Baixo</option>c
                <option value="Canto">Canto</option>
                <option value="Violão">Violão</option>
            </select>
          </label>
        </div>
        <label htmlFor="">
          <p className='create-input'>Price</p>
          <input
            type="number"
            value={ price }
            onChange={ ({ target: { value } }) => setPrice(value) }
            placeholder="200"
          />
        </label>
        <label htmlFor="">
          <p className='create-input'>Pagamento</p>
          <input
            type="date"
            value={ payment }
            onChange={ ({ target: { value } }) => setPayment(value) }
          />
        </label>
       
        <button type="submit" onClick={ (event) => createUser(event) } >Cadastrar</button>
      </form>
    </section>
  )
}

export default CreateUser;