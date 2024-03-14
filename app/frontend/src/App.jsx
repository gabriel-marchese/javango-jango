import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import UserHome from './pages/UserHome';
import './styles/app.css';
import CreateUser from './pages/CreateUser';
import CreateMusic from './pages/CreateMusic';
import Professors from './pages/Professors';
import Music from './pages/Music';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Home /> } />
      <Route path="/admin" element={ <Admin /> } />
      <Route path="/admin/create" element={ <CreateUser /> } />
      <Route path="/home" element={ <UserHome /> } />
      <Route path="/music/create" element= { <CreateMusic/> } ></Route>
      <Route path="/professors" element = { <Professors/> }></Route>
      <Route path="/music/:id" element = { <Music /> }></Route>
      <Route path="/user/:id" element = { <UserDetails /> }></Route>
    </Routes>
  );
}

export default App;
