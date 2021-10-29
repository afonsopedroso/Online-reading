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


export default class About extends React.Component {
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
                            <h1>About Onread. </h1>

                            <p>We selected the best books to you to check!</p>


                        </Container>
                        <br/>
                        <br/>
                        <Container>
                            <h2>The Creators </h2>
                            <p>The creators of the Onread website.</p>
                            <Container>
                                <Row>

                                    <Col xs={12} md={12}>
                                        <Image
                                            src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png"
                                            width={"200px"} height={"200px"} roundedCircle/>
                                        <h2>Afonso Pedroso</h2>
                                        <p>Afonso Pedroso studied at ***. Afonso really likes books blah blah blah</p>

                                        <br/>
                                        <br/>
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <Image src="https://scontent.fopo4-2.fna.fbcdn.net/v/t1.6435-9/112024158_3279250895470539_7211437381252711545_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEuyKS2ql7j7csbLKyNaImks4-C9loOOJGzj4L2Wg44kTjHle41JMga6ayyKvuOdaeS_bZ579e8LJ2TbJZegzx4&_nc_ohc=TcNqe8ukIMIAX_Cqz9t&_nc_ht=scontent.fopo4-2.fna&oh=4c844958583e6805dfb015e54ed54197&oe=61938F29"
                                               width={"200px"} height={"200px"} rounded/>

                                        <h2>Maria Alves</h2>

                                        <Col md={12} >
                                        <p>Maria Alves is a current student in the Master's Degree of Software Engineering in the University of Coimbra.
                                            In this bootcamp she decided, with Afonso, to create a website focusing on reading. Always loved to read books,
                                            also loved organization. Decided to combine both in this website.</p>
                                        </Col>

                                    </Col>


                                </Row>

                            </Container>
                        </Container>

                        <br/>
                        <br/>
                        <Container>
                            <h2>Our mission </h2>
                            <p>We want a better page that has the books that you love most.</p>
                        </Container>



                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted"> <Footer/> </Card.Footer>
            </Card>


        </div>
    }

}


