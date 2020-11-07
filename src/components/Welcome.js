import React, {Component} from 'react';
import {Jumbotron,Container} from 'react-bootstrap';

export default class Welcome extends Component{
    render(){
        return(
            <Jumbotron fluid>
                <Container>
                    <h1>Welcome</h1>
                    <p>
                        Where There is a Will There is a way
                    </p>
                </Container>
            </Jumbotron>
        )
    };
}