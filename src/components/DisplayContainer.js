import React from 'react'
import NewSimpleTask from './NewSimpleTask';
import TaskList from './TaskList';

const DisplayContainer = (props) => {
    //Calling props
    const priorities = props.priorities
    const dueDates = props.dueDates

    return(
        <div >
            <TaskList priorities={priorities} dueDates={dueDates}/>
            <NewSimpleTask />
        </div>
    )
}

export default DisplayContainer