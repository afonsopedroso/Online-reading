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


export default class BooksOnRead extends React.Component {
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
                    </Container>
                    <Nav.Link> <Link to='/userData'>
                        <div><Image
                            src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png"
                            width={"60px"} height={"60px"} roundedCircle/></div>
                    </Link></Nav.Link>


                </Navbar>

                <Card.Header>
                </Card.Header>


                <Card.Body>

                    <Card.Text>
                        <Container>
                            <Card bg="light" style={{width: '70rem'}}>
                                <Link to='/userData'>
                                    <div>Back to your user profile</div>
                                </Link>
                                <Container>

                                    <Image
                                        src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png"
                                        width={"200px"} height={"200px"} roundedCircle/>
                                    <h2>Maria Alves </h2>


                                    <h3>25 years old - Barcelos</h3>
                                </Container>
                                <p> Books on-read </p>

                                <Container>


                                    <CardGroup>

                                        <Container>
                                            <Row>

                                                <Col xs={6} md={4}>
                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Old man at the sea </Card.Title>
                                                            <Card.Text>
                                                                <p>by Ernest Hemingway </p>
                                                                This short novel, already a modern classic, is the
                                                                superbly told, tragic story of a Cuban fisherman in the
                                                                Gulf Stream and the giant Marlin he kills and
                                                                loses—specifically referred to in the citation
                                                                accompanying the author's Nobel Prize for literature in
                                                                1954.
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                            <small className="text-muted">Last updated 3 mins
                                                                ago</small>
                                                        </Card.Footer>
                                                    </Card>

                                                </Col>
                                                <Col xs={6} md={4}>
                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Old man at the sea </Card.Title>
                                                            <Card.Text>
                                                                <p>by Ernest Hemingway </p>
                                                                This short novel, already a modern classic, is the
                                                                superbly told, tragic story of a Cuban fisherman in the
                                                                Gulf Stream and the giant Marlin he kills and
                                                                loses—specifically referred to in the citation
                                                                accompanying the author's Nobel Prize for literature in
                                                                1954.
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                            <small className="text-muted">Last updated 3 mins
                                                                ago</small>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                                <Col xs={6} md={4}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Old man at the sea </Card.Title>
                                                            <Card.Text>
                                                                <p>by Ernest Hemingway </p>
                                                                This short novel, already a modern classic, is the
                                                                superbly told, tragic story of a Cuban fisherman in the
                                                                Gulf Stream and the giant Marlin he kills and
                                                                loses—specifically referred to in the citation
                                                                accompanying the author's Nobel Prize for literature in
                                                                1954.
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                            <small className="text-muted">Last updated 3 mins
                                                                ago</small>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                                <Col xs={6} md={4}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Old man at the sea </Card.Title>
                                                            <Card.Text>
                                                                <p>by Ernest Hemingway </p>
                                                                This short novel, already a modern classic, is the
                                                                superbly told, tragic story of a Cuban fisherman in the
                                                                Gulf Stream and the giant Marlin he kills and
                                                                loses—specifically referred to in the citation
                                                                accompanying the author's Nobel Prize for literature in
                                                                1954.
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                            <small className="text-muted">Last updated 3 mins
                                                                ago</small>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                                <Col xs={6} md={4}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Old man at the sea </Card.Title>
                                                            <Card.Text>
                                                                <p>by Ernest Hemingway </p>
                                                                This short novel, already a modern classic, is the
                                                                superbly told, tragic story of a Cuban fisherman in the
                                                                Gulf Stream and the giant Marlin he kills and
                                                                loses—specifically referred to in the citation
                                                                accompanying the author's Nobel Prize for literature in
                                                                1954.
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                            <small className="text-muted">Last updated 3 mins
                                                                ago</small>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                                <Col xs={6} md={4}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Old man at the sea </Card.Title>
                                                            <Card.Text>
                                                                <p>by Ernest Hemingway </p>
                                                                This short novel, already a modern classic, is the
                                                                superbly told, tragic story of a Cuban fisherman in the
                                                                Gulf Stream and the giant Marlin he kills and
                                                                loses—specifically referred to in the citation
                                                                accompanying the author's Nobel Prize for literature in
                                                                1954.
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                            <small className="text-muted">Last updated 3 mins
                                                                ago</small>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                            </Row>

                                        </Container>

                                    </CardGroup>
                                </Container>


                            </Card>
                        </Container>


                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">  <Footer/> </Card.Footer>
            </Card>


        </div>
    }
}
