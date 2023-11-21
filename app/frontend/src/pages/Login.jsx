import React from 'react';
import '../styles/pages/login.css'

const Login = () => {

  return (
    <div className='login-container'>
      <div className='login-content'>
        <div className='teste'>
          <h2>Login</h2>
          <form action="post">
            <label htmlFor="">
              <p className='email-label'>Email</p>
              <input className='input-login' type="text" />
            </label>

            <label htmlFor="">
              <p className='password-label'>Senha</p>
              <input className='input-login' type="password" />
            </label>

            <button>Entrar</button>
          </form>
        </div>
        <div className='login-image'>
        </div>
      </div>
    </div>
  );
};

export default Login;
