import React from 'react'
import TaskGroup from './TaskGroup';

const TaskList = (props) => {
    let groupTaskList = [];

    // Map on data to sort by priority or date <TaskGroup />

    return(
        <div>
            <div>TaskList</div>
            {groupTaskList}
        </div>
        
    )
}

export default TaskList