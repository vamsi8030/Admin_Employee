import React, {Component} from 'react';
import {Jumbotron,Container} from 'react-bootstrap';

export default class Jobseeker extends Component{
    render(){
        return(
            <Jumbotron fluid>
                <Container>
                    <h1>Jobseeker</h1>
                    <p>
                        Where There is a Will There is a way
                    </p>
                </Container>
            </Jumbotron>
        )
    };
}