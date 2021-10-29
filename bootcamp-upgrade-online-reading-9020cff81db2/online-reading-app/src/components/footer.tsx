import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";




// @ts-ignore
 //import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "../FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{ color: "#3F78EA",
                textAlign: "center",
                marginTop: "-50px" }}>
                Onread.            </h1>
            <Container>
                <Row>
                    <Column>

                        <FooterLink href="./About">About us</FooterLink>
                    </Column>
                    <Column>

                        <FooterLink href="#">Help</FooterLink>

                    </Column>
                    <Column>

                        <FooterLink href="#">Contact us</FooterLink>

                    </Column>
                    <Column>


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
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;