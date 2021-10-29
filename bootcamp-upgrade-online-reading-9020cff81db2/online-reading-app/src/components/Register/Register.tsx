import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import '../Register/Register.css'
import '../../css/style.css'
import Onread from '../Onreadtag/Onread';


// @ts-ignore
 //import {BrowserRouter, Route, Switch} from 'react-router-dom';
export default class Register extends React.Component{
    render() {
        return  <Container fluid className="centralize">
        <Row >
          <Col sm={6} className="align-items-center text-center section">
            <Onread/>
          </Col>
          
          <Col sm={6}>
          <strong><h1 style={{fontFamily:"sans-serif", color:"#003d6b"}}>Register.</h1></strong>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{color:"#003d6b"}}> Email address</Form.Label>
              <Form.Control className="formLabel" style={{color:"#5399cf"}}  type="email" placeholder="Enter email" />
              <Form.Text style={{color:"#003d6b"}} className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{color:"#003d6b"}}>Password</Form.Label>
              <Form.Control className="formLabel" style={{color:"#5399cf"}} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check style={{color:"#003d6b"}} type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="outline-primary" className="button" type="submit">
              Submit
            </Button>
        </Form>
          </Col>
        </Row>       
      </Container>
}
}