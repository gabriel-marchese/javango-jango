import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import './styles/app.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> }/>
      <Route exact path="/" element={ <Home /> }/>
    </Routes>
  );
}

export default App;
