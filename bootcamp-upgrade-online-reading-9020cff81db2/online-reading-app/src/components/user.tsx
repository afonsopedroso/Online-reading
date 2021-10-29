import React from 'react';
// @ts-ignore
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardGroup, Col, Container, Form, FormControl, Image, Nav, Navbar, Row} from "react-bootstrap";
import Footer from "./footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";


export default class User extends React.Component {
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
                            <Card bg="light" style={{width: '70rem'}}>

                                <h2>Edit User *Maria*</h2>
                                <Link to='/userData'>
                                    <div>Back to your user profile</div>
                                </Link>
                                <p><Image
                                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png"
                                    width={"200px"} height={"200px"} roundedCircle/></p>

                                <p> Name: </p>
                                <Form className="d-flex">

                                    <FormControl
                                        type="search"
                                        placeholder="Name"
                                        className="mr-2"
                                        aria-label="Search"
                                    />

                                    <Button variant="light">Enter</Button>
                                </Form>
                                <p> Email: </p>
                                <Form className="d-flex">

                                    <FormControl
                                        type="search"
                                        placeholder="Email"
                                        className="mr-2"
                                        aria-label="Search"
                                    />

                                    <Button variant="light">Enter</Button>
                                </Form>
                                <p> Address: </p>
                                <Form className="d-flex">

                                    <FormControl
                                        type="search"
                                        placeholder="Address"
                                        className="mr-2"
                                        aria-label="Search"
                                    />

                                    <Button variant="light">Enter</Button>
                                </Form>
                                <p> Birthday: </p>
                                <Form className="d-flex">

                                    <FormControl
                                        type="date"
                                        placeholder="Birthday"
                                        className="mr-6"
                                        aria-label="Search"
                                    />

                                    <Button variant="light">Enter</Button>
                                </Form>
                                <p> Site: </p>
                                <Form className="d-flex">

                                    <FormControl
                                        type="search"
                                        placeholder="Website"
                                        className="mr-2"
                                        aria-label="Search"
                                    />

                                    <Button variant="light">Enter</Button>
                                </Form>
                                <p> Connect: </p>
                                <div>

                                    <p className="social-container">
                                        <a
                                            href="https://www.youtube.com/c/jamesqquick"
                                            className="youtube social"
                                        >
                                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                                        </a>
                                        <a
                                            href="https://www.facebook.com/learnbuildteach/"
                                            className="facebook social"
                                        >
                                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                                        </a>
                                        <a
                                            href="http://www.instagram.com/larnbuildteach"
                                            className="instagram social"
                                        >
                                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                                        </a>
                                        <a href="https://wwww.twitter.com" className="twitter social">
                                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                                        </a>
                                    </p>
                                </div>

                                <Button variant="primary">Submit Changes</Button>
                            </Card>
                        </Container>


                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted"> <Footer/> </Card.Footer>
            </Card>


        </div>
    }
}



