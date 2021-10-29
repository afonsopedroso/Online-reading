import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import book from '../../books/book';
import NavBar from '../navBar';
import Onread from '../Onreadtag/Onread';



export default class Getbooks extends React.Component {
    getbooks=book.map((item,index)=>{
        return book;
    })
    
    

    render() { 
        return (<div>            
            {this.getbooks}
        </div>
            
            
            
    );
    }
}
 
