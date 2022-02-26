import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const NavMenu = () => {
    const navStyle = {
        padding: '5px',
        borderRadius: "25px"
    }
  return (
    <div>
        <Navbar bg="primary" variant="dark" className='rounded'>
            <Container style={navStyle}>
                
                <Navbar.Brand href='/'>ToDo</Navbar.Brand>
                <Navbar.Toggle aria-controls=" basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link href="/todos/new">New Task</Nav.Link>
                        <NavDropdown title="Sort By" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/todos">Priority</NavDropdown.Item>
                        <NavDropdown.Item href="/todos/duedates">Due Date</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavMenu