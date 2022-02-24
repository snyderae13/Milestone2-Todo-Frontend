import React, {useState} from 'react'
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

// Called from TaskGroup
const TaskRow = (props) => {
    // Set state for which view to display. view State changed by clicking on a list item.
    let [view, setView] = useState(false)

    // Props
    const todo = props.todo;
    const buttons = props.buttons;

    // Initialized to be used with the if/else block to determine if buttons are needed
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

    //Styling Views
    const detailedStyle = {
    textIndent: '2em'
    }

    //Desciption placeholder
    if (props.todo.description === "") {
        const placeholder = 'No description was added.'
        props.todo.description = placeholder
    } 

    // This is the default view and only displays the task and the EditButton and DeleteButton, if needed.
    const simpleView = () => {
        return(
            <li>
                {row}
            </li>
        )
    }

    // The detailed view is displayed when the task list item is clicked.
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

    // If the prop passed in is true, make sure the task has an EditButton and DeleteButton on the row. Otherwise, do not include the buttons.
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

    // How the task info is displayed to the user depends on the state of view.
    return(
        <div onClick={() => setView(!view)}>
            {view ? detailedView() : simpleView()}
        </div>
    )
}

export default TaskRow