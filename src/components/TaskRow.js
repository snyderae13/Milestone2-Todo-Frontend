import React from 'react'
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const TaskRow = (props) => {
    const todo = props.todo;
    const buttons = props.buttons;

    let row = [];

    const rowStyle = {
        display: "flex",
        marginTop: "5px"
    }

    const buttonGroupStyle = {
        marginLeft: "auto"
    }

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