import React, { useState, useEffect } from 'react';
import HeaderOther from '../components/HeaderOther';
import { requestData } from '../services/requests';
import '../styles/pages/admin.css';
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const [data, setData] = useState([]);
  const [logged, setLogin] = useState(false);

  const role = localStorage.getItem('role');
  
  useEffect(() => {
    
   
    const token = localStorage.getItem('token');
    setLogin(!!token);

    const fetchData = async () => {
      try {
        const result = await requestData('/admin');
        const detailsArray = Array.isArray(result) ? result : [result];
        setData(detailsArray)
      } catch (error) {
        console.error('Erro ao obter dados de usuários:', error);
      }
    };

    fetchData();
  }, [logged, setLogin]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const isMoreThan30DaysAgo = (dateString) => {
    const currentDate = new Date();
    const storedDate = new Date(dateString);

    const differenceInDays = Math.floor((currentDate - storedDate) / (24 * 60 * 60 * 1000));

    return differenceInDays > 30;
  };

  if (role !== 'admin') return <Navigate to="/home" />
  return (
    <>
      <HeaderOther />
      <main>
        <form action="post">
          <label htmlFor="">
            <input type="text" />
            <button>Buscar</button>
          </label>
        </form>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Valor</th>
              <th>Pagamento</th>
              <th>Instrumento</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={ user.id }>
                <td>{ user.name }</td>
                <td>{ user.email }</td>
                <td>{ user.price }</td>
                <td style={{ color: isMoreThan30DaysAgo(user.payment) ? 'red' : 'black' }}>{formatDate(user.payment)}</td>
                <td>{ user.type }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Admin;
