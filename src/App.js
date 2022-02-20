import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from './components/NavMenu.js';
import TaskList from './components/TaskList.js';
import NewDetailedTask from './components/NewDetailTask';
import Container from 'react-bootstrap/Container';
import NewSimpleTask from './components/NewSimpleTask';

function App() {
  const navStyle = {
    marginLeft: '0px',
    marginRight: '0px'
}
  return (
    <Container style={navStyle} >
      <NavMenu />
      <NewSimpleTask/>
      <Router>
        <Routes>
          <Route path='/todos' element={<TaskList priorities={false} dueDates={false}/>} />
          <Route path='/todos/priorities' element={<TaskList priorities={true} dueDates={false}/>} />
          <Route path='/todos/dueDates' element={<TaskList dueDates={true} priorities={false}/>} />
          <Route path='/todos/new' element={<NewDetailedTask newTask={true}/>} />
          <Route path='/todos/:id' element={<NewDetailedTask newTask={false}/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
