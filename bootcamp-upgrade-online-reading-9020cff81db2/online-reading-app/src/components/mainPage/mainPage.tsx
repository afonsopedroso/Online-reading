import React from 'react';
// @ts-ignore
import {BrowserRouter,Link, Route, Switch} from 'react-router-dom';
import NavBar from '../navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Card,
    CardGroup,
    CardImg, Carousel,
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


export default class MainPage extends React.Component {
    render() {

        return <div>


            <Card className="text-center">


            <NavBar/>

                <Card.Header>

                    <Carousel  >

                        <Carousel.Item >
                            <img
                                className="d-flex w-100"
                                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-books-1629065133.jpg?crop=1.00xw:0.752xh;0,0.185xh&resize=1200:*"
                                alt="First slide"  height={"600px"}
                            />
                            <Carousel.Caption>
                                <h3 className="description">Halloween is here!</h3>
                                <p className="description">Halloween is one of the best times to read. Swipe right for best books suggestions for this spooky season.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="justify-content-lg-center"
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320398641i/761381.jpg"
                                alt="Second slide"   height={"600px"}
                            />

                            <Carousel.Caption>
                                <h3 className="description">The Halloween Tree </h3>
                                <p className="description" >Eight costumed boys running to meet their friend Pipkin at the haunted house outside town encounter instead the huge and cadaverous Mr. Moundshroud.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="justify-content-lg-center"
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1295673439i/16307.jpg"
                                alt="Third slide"  height={"600px"}
                            />

                            <Carousel.Caption>
                                <h3 className="description">Hallowe'en Party</h3>
                                <p className="description">A teenage murder witness is drowned in a tub of apples... At a Hallowe'en party, Joyce—a hostile thirteen-year-old—boasts that she once witnessed a murder. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="justify-content-lg-center"
                                src=" https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1350137101i/106069.jpg"
                                alt="Third slide"  width={"400px"} height={"600px"}
                            />

                            <Carousel.Caption>
                                <h3 className="description">Batman: The Long Halloween</h3>
                                <p className="description">Taking place during Batman's early days of crime fighting, this new edition of the classic mystery tells the story of a mysterious killer who murders his prey only on holidays. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="justify-content-lg-center"
                                src=" https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1400766498i/22291265.jpg"
                                alt="Third slide"  width={"400px"} height={"600px"}
                            />

                            <Carousel.Caption>
                                <h3 className="description">Batman: The Long Halloween #1</h3>
                                <p className="description">Catwoman, The Joker, Poison Ivy, and The Riddler—any one of these Batman rogues may prove to be the mysterious serial killer known as “Holiday,” a murderer who kills according to the calendar. And now, a still-learning Batman must uncover the killer’s identity before they kill again! </p>
                            </Carousel.Caption>
                        </Carousel.Item>



                    </Carousel>
                </Card.Header>


                <Card.Body>

                    <Card.Text>


                        <Container>




                            <h2>Best books of the week </h2>
                            <p>We selected the best books to you to check!</p>

                            <CardGroup>



                                <Card>
                                    <CardImg
                                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                        alt=""/>

                                    <Card.Body>
                                        <Card.Title>Old man at the sea </Card.Title>
                                        <Card.Text>
                                            <p>by Ernest Hemingway </p>
                                            This short novel, already a modern classic, is the superbly told, tragic
                                            story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills
                                            and loses—specifically referred to in the citation accompanying the author's
                                            Nobel Prize for literature in 1954.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <CardImg
                                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1571423190i/41057294.jpg"
                                        alt=""/>
                                    <Card.Body>
                                        <Card.Title>Normal People</Card.Title>
                                        <Card.Text>
                                            <p>by Sally Rooney</p>
                                            At school Connell and Marianne pretend not to know each other. He’s popular
                                            and well-adjusted, star of the school soccer team while she is lonely,
                                            proud, and intensely private. But when Connell comes to pick his mother up
                                            from her housekeeping job at Marianne’s house, a strange and indelible
                                            connection grows between the two teenagers - one they are determined to
                                            conceal.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 25 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <CardImg
                                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327959366i/5472.jpg"
                                        alt=""/>
                                    <Card.Body>
                                        <Card.Title>Animal Farm / 1984</Card.Title>
                                        <Card.Text>
                                            <p>by George Orwell
                                            </p>
                                            Animal Farm is Orwell’s classic satire of the Russian Revolution - an
                                            account of the bold struggle, initiated by the animals, that transforms Mr.
                                            Jones’s Manor Farm into Animal Farm.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 1 h ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </Container>
                        <br/>
                        <br/>
                        <Container>
                            <h2>Best rated authors </h2>
                            <p>Award-winner authors are the ones that we suggest to you to check it out!</p>
                            <Container>
                                <Row>

                                    <Col xs={6} md={4}>
                                        <Image
                                            src="https://www.infoescola.com/wp-content/uploads/2010/07/Charles-Bukowski.jpg"
                                            alt="" width={"200px"} height={"200px"} rounded/>
                                        <p>Charles Bukowski</p>
                                        <Image src="http://cdn.onlinewebfonts.com/svg/img_530208.png" alt=""
                                               width={"140px"} height={"25px"}/>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <Image src="https://images.gr-assets.com/authors/1497455560p5/1285555.jpg"
                                               width={"200px"} height={"200px"} rounded/>
                                        <p>José Saramago</p>
                                        <Image src="http://cdn.onlinewebfonts.com/svg/img_530208.png" alt=""
                                               width={"140px"} height={"25px"}/>
                                    </Col>
                                    <Col xs={6} md={4}>

                                        <Image src="https://images.gr-assets.com/authors/1546235045p5/395812.jpg"
                                               width={"200px"} height={"200px"} rounded/>
                                        <p>Yuval Noah Harari</p>
                                        <Image src="http://cdn.onlinewebfonts.com/svg/img_530208.png" alt=""
                                               width={"140px"} height={"25px"}/>
                                    </Col>

                                </Row>
                                <br/>
                                <br/>
                                <Button variant="light"> <Nav.Link href="./authors">Go to authors page</Nav.Link> </Button>
                            </Container>
                        </Container>

                        <br/>
                        <br/>
                        <Container>
                            <h2>Quote of the day </h2>
                            <p><em>"The golden rule for every businessman is this: Put yourself in your customer's place."</em></p>
                           <p> - Orison Swett Marden </p>
                        </Container>

                        <br/>
                        <br/>

                        <Container>
                            <h2>See today's new article </h2>
                            <Image src="https://www.collinsdictionary.com/images/full/reading_339775121_1000.jpg"
                                   width={"500px"} height={"200px"} thumbnail/>
                            <p>Why reading is so good?</p>
                            <p>Author: user7374647</p>

                            <Button variant="primary">Read it here </Button>


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


