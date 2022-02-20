import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Col, Row} from 'react-bootstrap'

const NewSimpleTask = () => {
  return (
    <div>
      <Form>
        <Form.Group as={Row} className="mb-3 mt-5" controlId="formHorizontalTask">
          <Form.Label column sm={2}>
            New Task
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Task" />
          </Col>
        </Form.Group>
        <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Priority
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Low"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Medium"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="High"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check 
            type="radio"
            label="Critical"
            name="formHorizontalRadios"
            id="formHorizontalRadios4"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Due Date
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="date" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3">
      <Col sm={{span: 10, offset: 5}}>
          <Button type="submit">Add New Task</Button>
      </Col>
  </Form.Group>
        
      </Form>
    </div>
  );
}

export default NewSimpleTask