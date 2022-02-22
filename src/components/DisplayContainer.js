import React from 'react'
import NewSimpleTask from './NewSimpleTask';
import TaskList from './TaskList';

const DisplayContainer = (props) => {
    return(
        <div>
            <div>DisplayContainer</div>
            <TaskList />
            <NewSimpleTask />
        </div>
    )
}

export default DisplayContainer