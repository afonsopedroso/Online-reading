import React from 'react';
// @ts-ignore
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Card,
    CardGroup,
    CardImg,
    Col,
    Container,
    Form,
    FormControl,
    Image,
    Nav,
    Navbar,
    Row
} from "react-bootstrap";
import Footer from "../footer";


export default class Help extends React.Component {
    render() {

        return <div>


            <Card className="text-center">


                <Navbar className="description">
                    <Container>
                        <Navbar.Brand href="./mainPage">Onread.</Navbar.Brand>

                        <Nav className="me-auto">
                            <Nav.Link href="#home">Books</Nav.Link>
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

                    </Container>


                </Navbar>

                <Card.Header>
                </Card.Header>


                <Card.Body>

                    <Card.Text>


                        <Container>
                            <h1>Help </h1>

                            <h2>Frequently Asked Questions (FAQ): </h2>



                        </Container>


                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <Footer/>


                </Card.Footer>
            </Card>


        </div>
    }

}

