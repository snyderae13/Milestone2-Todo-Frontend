import React from 'react'
import TaskRow from './TaskRow';

const TaskGroup = (props) => {
    let tasksList = [];
    let header = props.header;

    // Map over tasks to make list with <TaskRow />
    
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