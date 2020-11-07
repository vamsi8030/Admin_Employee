import React, { useState, useEffect } from "react";
import axios from "axios";
import {RiArrowGoBackFill} from 'react-icons/ri';
import {Card, Button, Modal, Jumbotron, ButtonGroup, Table} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import EmployeeNav from "../EmployeeNav";
import Android from './Android';
import Backend from './Backend';
import DataAnalyst from './DataAnalyst';
import Database from './Database';
import DataScience from './DataScience';
import Desktop from './Desktop';
import Embedded from './Embedded';
import Frontend from './Frontend';
import Fullstack from './Fullstack';
import Network from './Network';

function FullstackModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" animation={true} scrollable={true} keyboard={false} centered >
      <Modal.Header closeButton><Modal.Title id="contained-modal-title-vcenter">Fullstack Qualifiers</Modal.Title></Modal.Header>
      <Modal.Body><Fullstack/></Modal.Body>
      <Modal.Footer><Button onClick={props.onHide}>Close</Button></Modal.Footer>
    </Modal>
  );
}

function EmbeddedModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" animation={true} scrollable={true} keyboard={false} centered>
      <Modal.Header closeButton><Modal.Title id="contained-modal-title-vcenter">Embedded Systems Qualifiers</Modal.Title></Modal.Header>
      <Modal.Body><Embedded/></Modal.Body>
      <Modal.Footer><Button onClick={props.onHide}>Close</Button></Modal.Footer>
    </Modal>
  );
}

function DatascienceModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" animation={true} scrollable={true} keyboard={false} centered>
      <Modal.Header closeButton><Modal.Title id="contained-modal-title-vcenter">Data Science Qualifiers</Modal.Title></Modal.Header>
      <Modal.Body><DataScience/></Modal.Body>
      <Modal.Footer><Button onClick={props.onHide}>Close</Button></Modal.Footer>
    </Modal>
  );
}

function AndroidModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" animation={true} scrollable={true} keyboard={false} centered>
      <Modal.Header closeButton><Modal.Title id="contained-modal-title-vcenter">Android Developer Qualifiers</Modal.Title></Modal.Header>
      <Modal.Body><Android/></Modal.Body>
      <Modal.Footer><Button onClick={props.onHide}>Close</Button></Modal.Footer>
    </Modal>
  );
}

function DatabaseModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" animation={true} scrollable={true} keyboard={false} centered>
      <Modal.Header closeButton><Modal.Title id="contained-modal-title-vcenter">Database Management Qualifiers</Modal.Title></Modal.Header>
      <Modal.Body><Database/></Modal.Body>
      <Modal.Footer><Button onClick={props.onHide}>Close</Button></Modal.Footer>
    </Modal>
  );
}

function DataAnalystModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" animation={true} scrollable={true} keyboard={false} centered>
      <Modal.Header closeButton><Modal.Title id="contained-modal-title-vcenter">Data Analyst Qualifiers</Modal.Title></Modal.Header>
      <Modal.Body><DataAnalyst/></Modal.Body>
      <Modal.Footer><Button onClick={props.onHide}>Close</Button></Modal.Footer>
    </Modal>
  );
}

function DesktopModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" animation={true} scrollable={true} keyboard={false} centered>
      <Modal.Header closeButton><Modal.Title id="contained-modal-title-vcenter">Desktop Engineer Qualifiers</Modal.Title></Modal.Header>
      <Modal.Body><Desktop/></Modal.Body>
      <Modal.Footer><Button onClick={props.onHide}>Close</Button></Modal.Footer>
    </Modal>
  );
}

function NetworkModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" animation={true} scrollable={true} keyboard={false} centered>
      <Modal.Header closeButton><Modal.Title id="contained-modal-title-vcenter">Network System Qualifiers</Modal.Title></Modal.Header>
      <Modal.Body><Network/></Modal.Body>
      <Modal.Footer><Button onClick={props.onHide}>Close</Button></Modal.Footer>
    </Modal>
  );
}

function BackendModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" animation={true} scrollable={true} keyboard={false} centered>
      <Modal.Header closeButton><Modal.Title id="contained-modal-title-vcenter">Backend Developer Qualifiers</Modal.Title></Modal.Header>
      <Modal.Body><Backend/></Modal.Body>
      <Modal.Footer><Button onClick={props.onHide}>Close</Button></Modal.Footer>
    </Modal>
  );
}

function FrontendModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" animation={true} scrollable={true} keyboard={false} centered >
        <Modal.Header closeButton><Modal.Title id="contained-modal-title-vcenter">Frontend Developer Qualifiers</Modal.Title></Modal.Header>
        <Modal.Body><Frontend/></Modal.Body>
        <Modal.Footer><Button onClick={props.onHide}>Close</Button></Modal.Footer>
      </Modal>
    );
  }

  function DefaultModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" animation={true} scrollable={true} keyboard={false} centered >
        <Modal.Header closeButton><Modal.Title id="contained-modal-title-vcenter">No Data Found</Modal.Title></Modal.Header>
        <Modal.Body>Please Check the data</Modal.Body>
        <Modal.Footer><Button onClick={props.onHide}>Close</Button></Modal.Footer>
      </Modal>
    );
  }

const JobDetail = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [user,setUser] = useState({
        designation:"",
        status:"",
        location:"",
        experience:"",
        jobposted:"",
        recruiter_name:"",
        recruiter_position:"",
        company:"",
        description:"",
        proposal:"",
        notice_period:""
    });
    const {id} = useParams();
    useEffect(() => {
        loadUser();
    });
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:2020/joblist/${id}`);
        setUser(res.data);
    };
    return(
        <Jumbotron>
            <Card>
                <EmployeeNav/>
            </Card>

            <Card>
                <Card.Header>
                  <div className="card-header bg-secondary text-white text-center">
                    <div className="row">
                      <h3 className="col-md-11 text-center">{user.designation}</h3>
                      <Link className="col-md-1 btn btn-center btn-secondary btn-sm-2" to="/JobListing"><RiArrowGoBackFill /></Link>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <Table>
                    <thead>
                        <tr>
                          <th>{user.status}</th>
                          <th>Date of post: {user.jobposted}</th>
                          <th>Required Experience: {user.experience}</th>
                          <th>Work Location: {user.location}</th>
                        </tr>
                      </thead>
                    </Table>
                  </Card.Title>
                  <Card.Text>
                    <div className="table-wrapper-scroll-y my-custom-scrollbar">
                      <Table borderless={true} responsive="xl">
                        
                        <thead>
                          
                          <tr>
                            <th><h4>Recruiter Name: </h4></th>
                            <th><h5>{user.recruiter_name}</h5></th>
                          </tr>
                          
                        </thead>
                        
                        <tbody>
                          
                          <tr>
                            <td style={{"width":"30%"}}><h4>Recruiter Position: </h4></td>
                            <td><h5>{user.recruiter_position}</h5></td>
                          </tr>
                          
                          <tr>
                            <td><h4>Required Skills: </h4></td>
                            <td><h5>{user.skills}</h5></td>
                          </tr>
                          
                          <tr>
                            <td><h4>Salary CTC(LPA): </h4></td>
                            <td><h5>{user.salary}</h5></td>
                          </tr>

                          <tr>
                            <td><h4>Notice Period: </h4></td>
                            <td><h5>{user.notice_period}</h5></td>
                          </tr>

                          <tr>
                            <td><h4>Company Description: </h4></td>
                            <td><h5>{user.description}</h5></td>
                          </tr>

                          <tr>
                            <td><h4>Job Description: </h4></td>
                            <td>
                              <h5>{user.proposal.p1}</h5>
                              <h5>{user.proposal.p2}</h5>
                              <h5>{user.proposal.p3}</h5>
                              <h5>{user.proposal.p4}</h5>
                              <h5>{user.proposal.p5}</h5>
                              <h5>{user.proposal.p6}</h5>
                            </td>
                          </tr>

                        </tbody>
                      </Table>
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ButtonGroup style={{"float":"right"}}>
                        <Button variant="info" onClick={() => setModalShow(true)}>View Top Qualifiers</Button>
                        {(() => {
                            switch(user.designation){
                                case "Full Stack Developer": return <FullstackModal show={modalShow} onHide={() => setModalShow(false)}/>;
                                case "Embedded System": return <EmbeddedModal show={modalShow} onHide={() => setModalShow(false)}/>;
                                case "Data Science": return <DatascienceModal show={modalShow} onHide={() => setModalShow(false)}/>; 
                                case "Android Development": return <AndroidModal show={modalShow} onHide={() => setModalShow(false)}/>;
                                case "Database Management": return <DatabaseModal show={modalShow} onHide={() => setModalShow(false)}/>;
                                case "Data Analyst": return <DataAnalystModal show={modalShow} onHide={() => setModalShow(false)}/>;
                                case "Desktop Engineer": return <DesktopModal show={modalShow} onHide={() => setModalShow(false)}/>;
                                case "Network Admin": return <NetworkModal show={modalShow} onHide={() => setModalShow(false)}/>;
                                case "Backend Development": return <BackendModal show={modalShow} onHide={() => setModalShow(false)}/>;
                                case "Frontend Development": return <FrontendModal show={modalShow} onHide={() => setModalShow(false)}/>;
                                default: return <DefaultModal show={modalShow} onHide={() => setModalShow(false)}/>
                            }
                        }) ()}
                        <Button variant="info"><Link to={"/JobListing"} className="btn text-white">Back</Link></Button>
                    </ButtonGroup>
                </Card.Footer>
            </Card>
        </Jumbotron>
    );
};

export default JobDetail;