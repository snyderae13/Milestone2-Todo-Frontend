import React from 'react'
import TaskRow from './TaskRow';

const TaskGroup = (props) => {
    //Calling props
    let tasksList = [];
    let header = props.header;
    let data = props.data;
    
    //Mapping and returning tasks
    
    if(data.length > 0) {
        tasksList = data.map(task => {
        return(
            <li>
                <TaskRow key={task._id} task={task} buttons={true}/>
            </li>
            )
        })
    } else {
       task = [{_id: "", name: "No Todos Found", priority: "", dueDate: "", description: ""}]
        tasksList = [<TaskRow key={'noTask'} buttons={false} task={task}/>] 
    }
    
    return(
        <div>
            <div>TaskGroup</div>
            <div>
                {header}
            </div>
            <ul>
                {tasksList}
            </ul>
        </div>
    )
}

export default TaskGroup