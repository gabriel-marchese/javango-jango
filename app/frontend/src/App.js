import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import UserHome from './pages/UserHome';
import './styles/app.css';
import CreateUser from './pages/CreateUser';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Home /> } />
      <Route path="/admin" element={ <Admin /> } />
      <Route path="/admin/create" element={ <CreateUser /> } />
      <Route path="/home" element={ <UserHome /> } />
    </Routes>
  );
}

export default App;
