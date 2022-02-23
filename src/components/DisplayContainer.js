import React from 'react'
import NewSimpleTask from './NewSimpleTask';
import TaskList from './TaskList';

// Called from App.js
const DisplayContainer = (props) => {
    //Calling props
    const priorities = props.priorities
    const dueDates = props.dueDates

    // Display the TaskList React Componet with NewSimpleTask underneath
    return(
        <div >
            <TaskList priorities={priorities} dueDates={dueDates}/>
            <NewSimpleTask />
        </div>
    )
}

export default DisplayContainer