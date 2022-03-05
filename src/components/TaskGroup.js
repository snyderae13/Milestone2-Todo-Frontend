import React from 'react'
import TaskRow from './TaskRow';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

// Called from TaskList.js
const TaskGroup = (props) => {
    //Calling props
    let header = props.header;
    let data = props.data;
    let headerStyle = props.headerStyle;
    let sort = props.sort;

    // todosList will be filled in the conditional below
    let todosList = [];
    
    // Style for each row
    const rowStyle = {
        display: "flex",
        marginTop: "5px"
    }
    
    // Style for the button groups to make them justify right, while the task remains on the left.
    const buttonGroupStyle = {
        display: "flex",
        marginLeft: "auto",
        alignItems: "center"
    }

    // If the data passed in has data in it, send each task to the the TaskRow React Component. Otherwise pass in an object that will display 'No todos found' under the priority.
    if(data.length > 0) {
        todosList = data.map(todo => {
        return(
            <li key={todo._id} >
                <div style={rowStyle}>
                    <TaskRow todo={todo} buttons={true}/>
                    <div style={buttonGroupStyle}>
                        <EditButton id={todo._id} sort={sort}/>
                        <DeleteButton id={todo._id}/>
                    </div>
                </div>
            </li>
                
            )
        })
    } else {
       let todo = [{_id: "", name: "No Todos Found", priority: "", dueDate: "", description: ""}]
        todosList = [
            <li key={'noTask'}>
                <TaskRow  buttons={false} todo={todo}/>
            </li>
        ] 
    }
    
    // Style for the GroupTask
    const groupStyle = {
        margin: "1rem 0.5rem"
    }

    // headerStyle was passed in as prop from TaskList and determines the background color of each header.
    return(
        <div style={groupStyle}>
            <div style={headerStyle}>
                {header}
            </div>
            <ul>
                {todosList}
            </ul>
        </div>
    )
}

export default TaskGroup