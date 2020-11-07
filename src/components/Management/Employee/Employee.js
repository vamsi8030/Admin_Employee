import React, {Component} from 'react';
import {Jumbotron,Card} from 'react-bootstrap';
import AnimatedCards from './AnimatedCards';
import EmployeeNav from './EmployeeNav';

export default class Employee extends Component{
    render(){
        return(
            <Jumbotron fluid>
                <Card bg="teal">
                   
                    <Card.Header>
                        <EmployeeNav/>
                    </Card.Header>
                    <Card.Body>
                       <AnimatedCards/>
                    </Card.Body>
               
                </Card>
            </Jumbotron>
        )
    };
}