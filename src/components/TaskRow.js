import React from 'react'
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

// Called from TaskGroup.js
const TaskRow = (props) => {
    // Props
    const todo = props.todo;
    const buttons = props.buttons;

    // row will be filled in by the conditional below
    let row = [];

    // Style for each row
    const rowStyle = {
        display: "flex",
        marginTop: "5px"
    }

    // Style for the button groups to make them justify right, while the task remains on the left.
    const buttonGroupStyle = {
        marginLeft: "auto"
    }

    // If the prop passed in is true, make sure the task has an EditButton and DeleteButton on the row. Otherwise, if there is no task for the TaskGroup, display 'No todos found', but do not include the buttons.
    if (buttons) {
        row = [
            <div key={todo.id + todo.priority} style={rowStyle}>
                {todo.name}
                <div style={buttonGroupStyle}>
                    <EditButton id={todo._id}/>
                    <DeleteButton id={todo._id} />
                </div>
            </div>
        ]
    } else {
        row = [
            <div key={todo.id + todo.priority}>
                {todo.name}
            </div>
        ]
    }

    return(
        <li>{row}</li>
    )
}

export default TaskRow