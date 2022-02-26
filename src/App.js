import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from './components/NavMenu.js';
import DisplayContainer from './components/DisplayContainer.js';
import NewDetailedTask from './components/DetailedTask';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container >
      <NavMenu />
      <Router>
        <Routes>
          <Route path='/' element={<DisplayContainer dueDates={true} priorities={false}/>} />
          <Route path='/todos/' element={<DisplayContainer priorities={true} dueDates={false}/>} />
          <Route path='/todos/dueDates' element={<DisplayContainer dueDates={true} priorities={false}/>} />
          <Route path='/todos/new' element={<NewDetailedTask newTask={true}/>} />
          <Route path='/todos/:id' element={<NewDetailedTask newTask={false}/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
