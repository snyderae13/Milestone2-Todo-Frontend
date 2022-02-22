import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Col, Row} from 'react-bootstrap'
import TodoDataService from '../services/todoService'


const NewSimpleTask = () => {
  // set up state to go through todos and setTodos

  
  
  let [name, setName] = useState("");
  let [priority, setPriority] = useState("");
  let [dueDate, setDueDate] = useState("");

  // going to need useEffect to get the post function to work

  // handleSubmit will need to be able to create a data object when the submit button is clicked

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {  name: name, priority: priority, dueDate: dueDate };
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
            <Form.Control
              type="text"
              placeholder="Task"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Select aria-label="Default select example" onChange={(e) => setPriority(e.target.value)}>
          <option> Choose Priority</option>
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
            <Form.Control
              type="date"
              onChange={(e) => setDueDate(e.target.value)}
            />
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

export default NewSimpleTask