import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Col, Row} from 'react-bootstrap'
import TodoDataService from '../services/todoService'

const NewDetailTask = () => {
    //useState for each value we need plus description

    let [name, setName] = useState("");
  let [priority, setPriority] = useState("");
  let [dueDate, setDueDate] = useState("");
  let [description, setDescription] = useState("");

  // need another submit but add description this time and console log the data 

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {  name: name, priority: priority, dueDate: dueDate, description: description };
    TodoDataService.createTodo(data);
    console.log(data);
  };





  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          as={Row}
          className="mb-3 mt-5"
          controlId="formHorizontalTask"
        >
          <Form.Label column sm={2}>
            New Task
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Task" onChange={(e) => setName(e.target.value)} required/>
          </Col>
        </Form.Group>
        <Form.Select aria-label="Default select example" onChange={(e) => setPriority(e.target.value)} required>
          <option value="" disabled selected> Choose Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value='Critical'>Critical</option>
        </Form.Select>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Due Date
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="date" onChange={(e) => setDueDate(e.target.value)} required/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
                Description
            </Form.Label>
            <Col sm={10}>
            <Form.Control as="textarea" rows={3} placeholder="Description" onChange={(e) => setDescription(e.target.value)} required/>
            </Col>

        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 5 }}>
            <Button type="submit">Add New Task</Button>
          </Col>
        </Form.Group>
        
      </Form>
    </div>
  );
};

export default NewDetailTask