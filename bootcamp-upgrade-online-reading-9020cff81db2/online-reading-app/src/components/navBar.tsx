import React from 'react';
import {Nav, Navbar, Container, Form, FormControl, Button, Image} from "react-bootstrap";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

export default class NavBar extends React.Component {
    render() { 
        return  <Navbar className="description">
        <Container>
            <Navbar.Brand href="./mainPage">Onread.</Navbar.Brand>
    
            <Nav className="me-auto">
                <Nav.Link href="/getbooks">Books</Nav.Link>
                <Nav.Link href="#features">People</Nav.Link>
                <Nav.Link href="./authors">Authors</Nav.Link>
                <Nav.Link href="./About">About</Nav.Link>
                <Nav.Link href="#features">Contacts</Nav.Link>
                <Nav.Link href="./Help">Help</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
    
    
            <Form className="d-flex">
    
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
    
                <Button variant="light">Search</Button>
            </Form>
            <Nav.Link> <Link to='/userData'>
                <div><Image
                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png"
                    width={"60px"} height={"60px"} roundedCircle/></div>
            </Link></Nav.Link>
            <Nav className="me-auto">
            <Nav.Link href="/login">                
                    Terminar sessão
                
            </Nav.Link>
            </Nav>
        </Container>
    
    
    </Navbar>

            
    }
}
 
