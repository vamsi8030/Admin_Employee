import React from 'react';
import {FaUserEdit,FaListAlt,FaChalkboardTeacher} from 'react-icons/fa';

export default class AnimatedCards extends React.Component{
    render() {
        return(
            <div className="crosscard">
                <div className="cardcontainer">
                
                    <div className="card" style={{"--i":-1}}>
                        <div className="content" style={{"--j":1}}>
                            <h2><a href="/Registration"><FaUserEdit/></a></h2>
                            <h4>Employee Details</h4>
                            <p className="dance">
                                Employee Details Employee Details Employee Details Employee Details Employee Details Employee Details
                                Employee Details Employee Details Employee Details Employee Details Employee Details Employee Details
                                Employee Details Employee Details Employee Details Employee Details Employee Details Employee Details
                                Employee Details Employee Details Employee Details Employee Details Employee Details Employee Details
                                Employee Details Employee Details Employee Details Employee Details Employee Details Employee Details
                                Employee Details Employee Details Employee Details Employee Details Employee Details Employee Details
                            </p>
                        </div>
                    </div>

                    <div className="card" style={{"--i":0}}>
                        <div className="content" style={{"--j":2}}>
                            <h2><a href="/JobListing"><FaListAlt/></a></h2>
                            <h4>Job Posted Data</h4>
                            <p className="dance">
                                Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data
                                Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data
                                Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data
                                Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data
                                Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data
                                Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data Job Posted Data
                            </p>
                        </div>
                    </div>

                    <div className="card" style={{"--i":1}}>
                        <div className="content" style={{"--j":3}}>
                            <h2><a href="Qualifiers"><FaChalkboardTeacher/></a></h2>
                            <h4>Qualifiers Data</h4>
                            <p className="dance">
                                Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data
                                Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data
                                Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data
                                Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data
                                Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data
                                Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data Qualifiers Data
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
}