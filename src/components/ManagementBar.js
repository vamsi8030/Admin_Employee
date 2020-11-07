import React, {Component} from 'react';
import './styles/ManagementStyle.css';
import {Link} from 'react-router-dom';

export default class ManagementBar extends Component{
    render() {
        return(
            <section className="p-3 bg-dark">
                <div className="container">
                    <div className="row">
            
                        <div className="col-md-4">
                            <button className="btn btn-primary btn-block">
                                <Link className="nav-link text-white" to={"/Profile"}>Profile Management</Link>
                            </button>
                        </div>
                
                        <div className="col-md-4">
                            <button className="btn btn-success btn-block">
                                <Link className="nav-link text-white" to={"/Employee"}>Employer Management</Link>
                            </button>
                        </div>

                        <div className="col-md-4">
                            <button className="btn btn-warning btn-block">
                                <Link className="nav-link text-white" to={"/Jobseeker"}>Jobseeker Management</Link>
                            </button>
                        </div>

                    </div>
                </div>
      </section>
        )
    };
}