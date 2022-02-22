import React from 'react'
import TaskRow from './TaskRow';

const TaskGroup = (props) => {
    //Calling props
    let todosList = [];
    let header = props.header;
    let data = props.data;
    
    //Mapping and returning tasks
    
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
    
    return(
        <div>
            <div>
                {header}
            </div>
            <ul>
                {todosList}
            </ul>
        </div>
    )
}

export default TaskGroup