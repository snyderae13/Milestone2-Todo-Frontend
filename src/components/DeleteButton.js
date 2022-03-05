import React, {useContext} from 'react';
import {Button} from 'react-bootstrap';
import {DeleteTodoContext} from '../context/DeleteTodoContext';

// Called from TaskRow.js
const DeleteButton = (props) => {
    // Props
    let id = props.id

    // Use DeleteTodoContext
    const {delFlag, handleDelClick} = useContext(DeleteTodoContext);

    // Delete button style to provide spacing
    let delBtnStyle = {
        padding: "0rem 0.25rem",
        marginLeft: "0.25rem",
        marginRight: "0.75rem"
    }

    // Button icon is from FontAwesome
    return (
            <Button 
                style={delBtnStyle} 
                className="btn-danger"
                onClick={() => {handleDelClick(id, delFlag)}}
            >
                <i className="fas fa-trash-alt"></i>
            </Button>
    )
}

export default DeleteButton