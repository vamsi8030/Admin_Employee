import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import {TiLocation} from 'react-icons/ti';
import {FaSearchLocation} from 'react-icons/fa';
import {DiGoogleAnalytics} from 'react-icons/di';
import {BiMinusFront} from 'react-icons/bi';
import {BiMinusBack} from 'react-icons/bi';
import {GrStackOverflow} from 'react-icons/gr';
import {GiArtificialIntelligence} from 'react-icons/gi';
import {MdDeveloperBoard} from 'react-icons/md';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaWhatsappSquare} from 'react-icons/fa';
import {MdContactMail} from 'react-icons/md';

export default class SideCards extends Component{
    render(){
        return(
            <>
                <Card border="primary" bg="primary" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <Link className="nav-link text-white" to="#"><TiLocation />Bangalore</Link>
                            <Link className="nav-link text-white" to="#"><TiLocation />Chennai</Link>
                            <Link className="nav-link text-white" to="#"><TiLocation />Kerala</Link>
                            <Link className="nav-link text-white" to="#"><TiLocation />Delhi</Link>
                            <Link className="nav-link text-white" to="#"><TiLocation />Mumbai</Link>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link className="nav-link text-white" to="#"><FaSearchLocation />Jobs By Location</Link>
                    </Card.Footer>
                </Card>
                
                <br />

                <Card border="primary" bg="success" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <Link className="nav-link text-white" to="#"><DiGoogleAnalytics />Data Analyst</Link>
                            <Link className="nav-link text-white" to="#"><BiMinusFront />Front End</Link>
                            <Link className="nav-link text-white" to="#"><BiMinusBack />Back End</Link>
                            <Link className="nav-link text-white" to="#"><GrStackOverflow />Full Stack</Link>
                            <Link className="nav-link text-white" to="#"><GiArtificialIntelligence />AI and ML</Link>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link className="nav-link text-white" to="#"><MdDeveloperBoard />Popular Searches</Link>
                    </Card.Footer>
                </Card>
                
                <br />

                <Card border="primary" bg="warning" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <Link className="nav-link text-white" to="#"><FaFacebookSquare />Facebook</Link>
                            <Link className="nav-link text-white" to="#"><FaLinkedin />LinkedIn</Link>
                            <Link className="nav-link text-white" to="#"><FaTwitterSquare />Twitter</Link>
                            <Link className="nav-link text-white" to="#"><FaInstagramSquare />Instagram</Link>
                            <Link className="nav-link text-white" to="#"><FaWhatsappSquare />Whatsapp</Link>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link className="nav-link text-white" to="#"><MdContactMail />Contact Through</Link>
                    </Card.Footer>
                </Card>
            </>
        )
    };
}