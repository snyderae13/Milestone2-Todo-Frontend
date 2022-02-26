import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Col, Row} from 'react-bootstrap'
import TodoDataService from '../services/todoService'
import { useParams } from 'react-router-dom';



const NewDetailTask = (props) => {
    //useState for each value we need plus description
    let newTask = props.newTask;
    
    const {id} =  useParams();
    

    let [name, setName] = useState("");
  let [priority, setPriority] = useState("");
  let [dueDate, setDueDate] = useState("");
  let [description, setDescription] = useState("");
  let [taskData, setTaskData] =useState([])
  let [dateCreated, setDateCreated]= useState("")

  // need another submit but add description this time and console log the data 

  const handleSubmit = (e) => {
    
    if(newTask){
    let data = {  name: name, priority: priority, dueDate: dueDate, description: description };
    TodoDataService.createTodo(data);
    console.log(data);
    } else {
      let data ={  name: name, priority: priority, dueDate: dueDate, description: description, dateCreated: dateCreated}
    TodoDataService.updateTodo(id,data);

    }
  };

  // need a function thats going to pull the data from the id and check the data and pull into input fields 

    //Once the first useEffect is runs, the second useEffect will allow us to put the data into the forms 
    
    useEffect((newTask, id)=> {
      if(!newTask) {
        
        TodoDataService.getTodo(id).then (response => {setTaskData(response.data)
        });
      } 
    }, [])

    useEffect(() => {
      
      if(taskData.length > 0){
        setName(taskData[0].name)
        setPriority(taskData[0].priority)
        setDueDate(taskData[0].dueDate)
        setDescription(taskData[0].description)
        setDateCreated(taskData[0].dateCreated)
      }
    }, [taskData])
    
  




  // handleUpdate is put into the handleSubmit to make it all one function 
  
  

  const taskStyling = {
    border: " 2px solid grey",
    padding: "5px",
    borderRadius: "5px",
    marginTop: "15px"
  }











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
            <Form.Control type="text" placeholder="Task" onChange={(e) => setName(e.target.value)} required value={name}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 mt-3">
          <Form.Label column sm={2}>Priority</Form.Label>
        <Col sm={10}>
        <Form.Select aria-label="Default select example" onChange={(e) => setPriority(e.target.value)} required value={priority}>
          <option disabled > Choose Priority</option>
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
            <Form.Control type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
                Description
            </Form.Label>
            <Col sm={10}>
            <Form.Control as="textarea" value={description} rows={3} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
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