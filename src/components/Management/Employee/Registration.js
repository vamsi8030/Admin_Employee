import React, {Component} from 'react';
import {Jumbotron,Card} from 'react-bootstrap';
import EmployeeNav from './EmployeeNav';

export default class Registration extends Component{
    render(){
        return(
            <Jumbotron fluid>
                <Card bg="teal">
                   
                    <Card.Header>
                        <EmployeeNav/>
                    </Card.Header>
                    <Card.Body>
                       Employee
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
               
                </Card>
            </Jumbotron>
        )
    };
}