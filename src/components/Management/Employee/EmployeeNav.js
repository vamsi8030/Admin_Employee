import React, {Component} from 'react';
import {Tooltip,OverlayTrigger,Navbar, Nav} from 'react-bootstrap';
import {FaUsers,FaUserEdit,FaListAlt,FaChalkboardTeacher} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class EmployeeNav extends Component{
    render(){
        const regTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>Employee Data</Tooltip>
        );
        const jobTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>Job Posted Data</Tooltip>
        );
        const quaTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>Qualifiers Data</Tooltip>
        );
        return(
            <Navbar collapseOnSelect expand="lg" className="bar" variant="dark">
                <FaUsers className="like"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        
                        <OverlayTrigger placement="bottom" delay={{show:250,hide:400}} overlay={regTooltip}>
                            <Link to={"/Registration"} className="like"><FaUserEdit className="fa"/></Link>
                        </OverlayTrigger>
                        
                        <OverlayTrigger placement="bottom" delay={{show:250,hide:400}} overlay={jobTooltip}>
                            <Link to={"/JobListing"} className="like"><FaListAlt title="Job Listing" className="fa"/></Link>
                        </OverlayTrigger>
                        
                        <OverlayTrigger placement="bottom" delay={{show:250,hide:400}} overlay={quaTooltip}>
                            <Link to={"/Qualifiers"} className="like"><FaChalkboardTeacher title="Qualifiers" className="fa"/></Link>
                        </OverlayTrigger>

                    </Nav>

                </Navbar.Collapse>
           </Navbar>
                   
        )
    };
}