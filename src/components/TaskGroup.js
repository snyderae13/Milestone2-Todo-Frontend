import React from 'react'
import TaskRow from './TaskRow';

// Called from TaskList.js
const TaskGroup = (props) => {
    //Calling props
    let header = props.header;
    let data = props.data;
    let headerStyle = props.headerStyle;

    // todosList will be filled in the conditional below
    let todosList = [];
    
    // If the data passed in has data in it, send each task to the the TaskRow React Component. Otherwise pass in an object that will display 'No todos found' under the priority.
    if(data.length > 0) {
        todosList = data.map(todo => {
        return(
                <TaskRow key={todo._id} todo={todo} buttons={true}/>
            )
        })
    } else {
       let todo = [{_id: "", name: "No Todos Found", priority: "", dueDate: "", description: ""}]
        todosList = [<TaskRow key={'noTask'} buttons={false} todo={todo}/>] 
    }
    
    // headerStyle was passed in as prop from TaskList and determines the background color of each header.
    return(
        <div>
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