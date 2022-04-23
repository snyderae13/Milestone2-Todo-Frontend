import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

// Called from TaskRow.js
function EditButton(props: any) {
    // navigate allows redirection to another page when the button is clicked
    const navigate = useNavigate();
    
    // Props
    let id = props.id;
    let sort = props.sort;

    // Handle click function redirects to the TaskForm, including the taskId as a param in the url
    const handleClick = (e: any) => {
        navigate(`/todos/${id}/${sort}`);
    }

    // Style for the button to include space between the buttons
    let editBtnStyle = {
        padding: "0rem 0.25rem"
    }
    
    // Button icon is from FontAwesome
    return (
        <Button 
            style={editBtnStyle} 
            className="edit-button btn-secondary"
            onClick={handleClick}
        >
            <i className="far fa-edit"></i>
        </Button>
    )
}

export default EditButton;