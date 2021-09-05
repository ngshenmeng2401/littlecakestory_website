import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../../assets/logo2.png';
import { IconName } from "react-icons/bs";
import { FcHome } from "react-icons/fc";
import { HeaderStyle } from './style';

const Header = () => {
    return (
        <HeaderStyle>
            <Navbar bg="dark" variant="dark" expand="xl" fixed="top">
                <Navbar.Brand href="/" className="navbarTitle">
                    <img src={logo} alt="logo" className="img"/>{' '} 
                    LITTLE CAKE STORY
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" className="navitem left">Home</Nav.Link>
                    <NavDropdown title="Product" id="collasible-nav-dropdown" className="navitem left">
                        <NavDropdown.Item href="/product">Bento Cake</NavDropdown.Item>
                        <NavDropdown.Item href="/product">Cake</NavDropdown.Item>
                        <NavDropdown.Item href="/product">Cup Cake</NavDropdown.Item>
                        <NavDropdown.Item href="/product">Tart</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/cart" className="navitem left">Cart</Nav.Link>
                    <Nav.Link href="/aboutus" className="navitem left">About Us</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                        className="navitem right"
                    />
                    <Button variant="outline-light" className="navitem right">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="/login" className="navitem right">Login</Nav.Link>
                    <Nav.Link href="/register" className="navitem right">Register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </HeaderStyle>
    )
}

export default Header