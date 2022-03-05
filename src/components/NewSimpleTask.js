import React from 'react'
import { useState } from 'react'
import {Button, Form, Col, Row} from 'react-bootstrap'
import TodoDataService from '../services/todoService'

// Called from DisplayContainer.js
const NewSimpleTask = () => {
  // set up state to go through todos and setTodos
  let [name, setName] = useState("");
  let [priority, setPriority] = useState("");
  let [dueDate, setDueDate] = useState("");

  // handleSubmit will need to be able to create a data object when the submit button is clicked
  const handleSubmit = (e) => {
    let data = {  name: name, priority: priority, dueDate: dueDate };
    TodoDataService.createTodo(data);
  };


  const taskStyling = {
    border: " 2px solid grey",
    padding: "5px",
    borderRadius: "5px"
  }

  // Form to add a new Task displayed on the Sorted pages. Only required fields present
  return (
    <div style={taskStyling}>
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
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 mt-3">
          <Form.Label column sm={2} >Priority</Form.Label>
        <Col sm={10}>
        <Form.Select  aria-label="Default select example" onChange={(e) => setPriority(e.target.value)} required>
          <option value="" disabled required> Choose Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value='Critical'>Critical</option>
        </Form.Select>
        </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Due Date
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              onChange={(e) => setDueDate(e.target.value)}
              required
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