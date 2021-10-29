import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/login.css'
import People from '../../people/people'

import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import {BrowserRouter, Route,Link, Switch, Redirect} from 'react-router-dom';
import Onread from '../Onreadtag/Onread';


interface MyState {
  email:string,
  password:string,
}
export default class Login extends React.Component<any,any>{
  
  constructor(props: any){
    super(props);    
 
  this.state={
    email:"",
    password:"",
    route:"/login"
  };
  
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);  
}
  
nextPath(path:string) {
  this.props.history.push(path);
}

handleChange = (e: { target: { name: any; value: any; }; }) =>{
      const {name,value}=e.target
      this.setState({[name]:value})
          
    }

  handleSubmit = (e: { preventDefault: () => void; }) =>{
    if(this.state.email==="afonsonunespedroso@gmail.com" && this.state.password==="12345"){
      
      this.nextPath("/Register");      
      /* alert("user inserted sucessfully"); 
       console.log("1");
      console.log("2"); */
      
    }else{
         alert("Invalid user");
         
      }
      
  }
  render() {
        return <Container fluid className="centralize">
        <Row className="section">
        <Onread/>
        </Row>
        <Row className="section">
            <Form onSubmit={this.handleSubmit}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">              
              <Form.Control name="email" className="formLabelLogin" defaultValue={this.state.email} style={{color:"#5399cf"}}  type="email" placeholder="Enter email" required onChange={this.handleChange}/>
              <Form.Text style={{color:"#003d6b"}} className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              
              <Form.Control name="password" className="formLabelLogin" defaultValue={this.state.password} style={{color:"#5399cf"}} type="password" placeholder="Password" required onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check style={{color:"#003d6b"}} type="checkbox" label="Check me out" />
            </Form.Group>

            <Button  onClick={this.handleSubmit} variant="outline-primary" className="buttonLogin" type="button">Submit</Button>
            
            
        </Form>
        
        </Row>
      </Container>
           



       

}
}




