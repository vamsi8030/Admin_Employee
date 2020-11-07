import React, {Component} from 'react';
import {Jumbotron,Card} from 'react-bootstrap';
import EmployeeNav from './EmployeeNav';

export default class Qualifiers extends Component{
    render(){
        return(
            <Jumbotron fluid>
                <Card bg="teal">
                   
                    <Card.Header>
                        <EmployeeNav/>
                    </Card.Header>
                    <Card.Body>
                       Qualifiers
                    </Card.Body>
               
                </Card>
            </Jumbotron>
        )
    };
}