import React, {useState} from 'react'
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const TaskRow = (props) => {
    let [view, setView] = useState(false)
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

//Styling Views
    const detailedStyle = {
    textIndent: '2em'
}

//Desciption placeholder
    if (props.todo.description === "") {
        const placeholder = 'No description was added.'
        props.todo.description = placeholder
    } 

//Toggle between views
    const simpleView = () => {
        return(
            <li>
                {row}
            </li>
        )
    }

    

    const detailedView = () => {
        return(
            
            <li>
                <h2><u>{props.todo.name}</u></h2>
                <div style={detailedStyle}>
                    <h4>Priority: {props.todo.priority}</h4>
                    <h4>Due Date: {props.todo.dueDate}</h4>
                    <h4>Description: {props.todo.description}</h4>
                </div>
            </li>
            
            
        )
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
        <div onClick={() => setView(!view)}>
            {view ? detailedView() : simpleView()}
        </div>
    )
}

export default TaskRow