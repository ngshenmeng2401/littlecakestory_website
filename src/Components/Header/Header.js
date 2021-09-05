import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../../assets/logo2.png';
import { IconName } from "react-icons/bs";
import { FcHome } from "react-icons/fc";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" className="navbarTitle">
                    <img src={logo} alt="logo" style={{width:"40px", height:"40px"}}/>{' '} 
                    LITTLE CAKE STORY
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features" style={{marginLeft:"20px"}}>Home</Nav.Link>
                    <NavDropdown title="Product" id="collasible-nav-dropdown" style={{marginLeft:"20px"}}>
                        <NavDropdown.Item href="#action/3.3">Bento Cake</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Cake</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Cup Cake</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Tart</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing" style={{marginLeft:"20px"}}>Cart</Nav.Link>
                    <Nav.Link href="#pricing" style={{marginLeft:"20px"}}>About Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets" style={{marginRight:"20px"}}>Login</Nav.Link>
                    <Nav.Link eventKey={2} style={{marginRight:"20px"}}>Register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    )
}

export default Header