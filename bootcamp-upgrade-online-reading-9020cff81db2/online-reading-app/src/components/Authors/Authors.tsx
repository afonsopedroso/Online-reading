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


export default class Authors extends React.Component {
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
                            <h1>Authors </h1>
                            <br/>
                            <br/>
                        </Container>
                        <Container>
                            <h2>Best rated authors </h2>
                            <p>Award-winner authors are the ones that we suggest to you to check it out!</p>
                            <Container>
                                <Image src="https://www.infoescola.com/wp-content/uploads/2010/07/Charles-Bukowski.jpg"
                                       alt="" width={"200px"} height={"200px"} rounded/>
                                <h3>Charles Bukowski</h3>
                                <Row>

                                    <Col xs={12} md={12}>


                                        <Container>
                                            <Row>

                                                <Col xs={2} md={2}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555887577i/40409718.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Post Office </Card.Title>
                                                            <Card.Text>
                                                                <p>by Charles Bukowski </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>

                                                </Col>
                                                <Col xs={2} md={2}>
                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1325028693i/38500.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Women</Card.Title>
                                                            <Card.Text>
                                                                <p>by Charles Bukowski</p>

                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xs={2} md={2}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348053445i/141526.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Pulp </Card.Title>
                                                            <Card.Text>
                                                                <p>by Charles Bukowski</p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xs={2} md={2}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361998529i/38505.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Hollywood </Card.Title>
                                                            <Card.Text>
                                                                <p>by Charles Bukowski </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xs={2} md={2}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1407706616i/497199.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Factotum</Card.Title>
                                                            <Card.Text>
                                                                <p>by Charles Bukowski </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xs={2} md={2}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388195001i/38501.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Ham on Rye </Card.Title>
                                                            <Card.Text>
                                                                <p>by Charles Bukowski </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </Col>


                                            </Row>

                                        </Container>
                                        <br/>
                                        <br/>
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <Image src="https://images.gr-assets.com/authors/1497455560p5/1285555.jpg"
                                               width={"200px"} height={"200px"} rounded/>
                                        <h3>José Saramago</h3>
                                        <p>This author is know for several books. Some of those are "Homem Duplicado",
                                            "Clarabóia", "Ensaio sobre a Segueira"; </p>
                                        <Container>
                                            <Row>

                                                <Col xs={2} md={2}>
                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528481068i/40495148.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Blindness </Card.Title>
                                                            <Card.Text>
                                                                <p>by José Saramago </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>

                                                </Col>
                                                <Col xs={2} md={2}>
                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1408538386i/7011225.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Caim </Card.Title>
                                                            <Card.Text>
                                                                <p>by José Saramago </p>

                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xs={2} md={2}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1434145763i/5574353.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>A Viagem do Elefante </Card.Title>
                                                            <Card.Text>
                                                                <p>by José Saramago </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xs={2} md={2}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1450391986i/12596033.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Clarabóia </Card.Title>
                                                            <Card.Text>
                                                                <p>by José Saramago </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xs={2} md={2}>
                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1181012946i/1103739.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Casi un Objeto </Card.Title>
                                                            <Card.Text>
                                                                <p>by José Saramago </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>

                                                </Col>
                                                <Col xs={2} md={2}>
                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327937800i/3018539.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Death with Interruptions </Card.Title>
                                                            <Card.Text>
                                                                <p>by José Saramago </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>

                                                </Col>


                                            </Row>
                                            <br/>
                                            <br/>
                                        </Container>
                                    </Col>

                                    <Col xs={12} md={12}>

                                        <Image src="https://images.gr-assets.com/authors/1546235045p5/395812.jpg"
                                               width={"200px"} height={"200px"} rounded/>
                                        <h3>Yuval Noah Harari</h3>
                                        <p>This author has read Sapiens, 21 Questions for the 21st century</p>
                                        <Container>
                                            <Row>

                                                <Col xs={2} md={2}>
                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595674533i/23692271.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Sapiens: A Brief History of
                                                                Humankind </Card.Title>
                                                            <Card.Text>
                                                                <p>by Yuval Noah Harari </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>

                                                </Col>
                                                <Col xs={2} md={2}>
                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1468760805i/31138556.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Homo Deus: A History of Tomorrow </Card.Title>
                                                            <Card.Text>
                                                                <p>by Yuval Noah Harari </p>

                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xs={2} md={2}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1564577305i/38820046.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>21 Lessons for the 21st Century </Card.Title>
                                                            <Card.Text>
                                                                <p>by Yuval Noah Harari </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xs={2} md={2}>

                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594616346i/54110137.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Sapiens: a Graphic History </Card.Title>
                                                            <Card.Text>
                                                                <p>by Yuval Noah Harari
                                                                    ,
                                                                    David Vandermeulen
                                                                    ,
                                                                    Daniel Casanave
                                                                </p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xs={2} md={2}>
                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524511979i/36203303.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Money </Card.Title>
                                                            <Card.Text>
                                                                <p>by Yuval Noah Harari</p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>

                                                </Col>
                                                <Col xs={2} md={2}>
                                                    <Card>
                                                        <CardImg
                                                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1368423738i/6706864.jpg"
                                                            alt=""/>

                                                        <Card.Body>
                                                            <Card.Title>Special Operations in the Age of
                                                                Chivalry</Card.Title>
                                                            <Card.Text>
                                                                <p>by Yuval Noah Harari</p>
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>

                                                </Col>


                                            </Row>

                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>

                        <br/>
                        <br/>
                        <Container>

                        </Container>

                        <br/>
                        <br/>

                        <Container>


                        </Container>

                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">  <Footer/> </Card.Footer>
            </Card>


        </div>
    }

}


