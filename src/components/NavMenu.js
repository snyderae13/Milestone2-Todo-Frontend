import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const NavMenu = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
            <Container>
                
                <Navbar.Brand href='#home'>ToDo</Navbar.Brand>
                <Navbar.Toggle aria-controls=" basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/new">New Task</Nav.Link>
                        <NavDropdown title="Sort By" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/priorities">Priority</NavDropdown.Item>
                        <NavDropdown.Item href="/duedates">Due Date</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavMenu