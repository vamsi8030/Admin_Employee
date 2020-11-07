import React, {Component} from 'react';
import './styles/NavigationStyle.css';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {TiGlobeOutline} from 'react-icons/ti';
import {FaUserCircle} from 'react-icons/fa';
import {RiLogoutCircleRFill} from 'react-icons/ri';

export default class NavigationBar extends Component{
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Link to={"/"} className="btn block text-white"><TiGlobeOutline/>Chakuri</Link>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to={"#About"} className="btn butno">About Us</Link>
                    <Link to={"#Contact"} className="btn butno">Contact</Link>
                </Nav>
                <Nav>
                    <Link to={"#Admin"} className="btn butnp"><FaUserCircle/>Admin</Link>
                    <Link to={"#LogOut"} className="btn butnp"><RiLogoutCircleRFill/>Log Out</Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}