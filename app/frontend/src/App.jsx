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
import History from './pages/History';
import Courses from './pages/Courses';
import Structure from './pages/Structure';
import Teachers from './pages/Teachers';
import Events from './pages/Events';
import Contact from './pages/Contact';
import TeacherDetail from './pages/TeacherDetail';
import CourseDetail from './pages/CourseDetail';

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
      <Route path="/history" element={ <History /> } />
      <Route path="/courses" element={ <Courses /> } />
      <Route path="/courses/:instrument" element={ <CourseDetail /> } />
      <Route path="/structure" element={ <Structure /> } />
      <Route path="/teachers" element={ <Teachers /> } />
      <Route path="/teachers/:name" element={ <TeacherDetail /> } />
      <Route path="/events" element={ <Events /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
  );
}

export default App;
