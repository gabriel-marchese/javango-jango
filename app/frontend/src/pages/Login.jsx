import React, { useState, useEffect } from 'react';
import { requestLogin, setToken, requestData } from '../services/requests';
import { Navigate } from 'react-router-dom';
import '../styles/pages/login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin]= useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const login = async (event) => {
    event.preventDefault();

    try {
      const { token } = await requestLogin('/login', { email, password });

      setToken(token);

      const { role, id } = await requestData('/login/role', { email, password });
      if (role === 'admin') {
        setIsAdmin(true);
      }
      
      localStorage.setItem('id', id)
      localStorage.setItem('token',  token);
      localStorage.setItem('role',  role);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged && isAdmin === true) return <Navigate to="/admin" />;
  if (isLogged && isAdmin === false) return <Navigate to="/home" />;
  return (
    <div className='login-container'>
      <div className='login-content'>
        <div className='teste'>
          <h2>Login</h2>
          <form action="post">
            <label htmlFor="">
              <p className='email-label'>Email</p>
              <input
                className='input-login'
                type="text"
                value={ email }
                onChange={ ({ target: { value } }) => setEmail(value) }
                placeholder="login@jango.com"
              />
            </label>

            <label htmlFor="">
              <p className='password-label'>Senha</p>
              <input
                className='input-login'
                type="password"
                value={ password }
                onChange={ ({ target: { value } }) => setPassword(value) }
                placeholder="Senha"
              />
            </label>
            {
            (failedTryLogin)
              ? (
                <p className='error-message'>
                  {
                    `O endereço de e-mail ou a senha não estão corretos.`
                  }
                </p>
              )
              : null
            }

            <button type="submit" onClick={ (event) => login(event) }>Entrar</button>
          </form>
        </div>
        <div className='login-image'>
        </div>
      </div>
    </div>
  );
};

export default Login;
