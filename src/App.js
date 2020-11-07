import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/js/dist/scrollspy';
import NavigationBar from './components/NavigationBar';
import ManagementBar from './components/ManagementBar';
import SideCards from './components/SideCards';
import Profile from './components/Management/Profile/Profile';
import Employee from './components/Management/Employee/Employee';
import Jobseeker from './components/Management/Jobseeker/Jobseeker';
import Registration from './components/Management/Employee/Registration';
import Qualifiers from './components/Management/Employee/Qualifiers';
import JobListing from './components/Management/Employee/JobListing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Welcome from './components/Welcome';
import JobDetails from './components/Management/Employee/Data/JobDetail';

function App() {
  return (
    <div className="App">
        <Router>
          <NavigationBar/>
          <ManagementBar/>
          <section className="p-3">
            <div className="row">
              <div className="col-md-9">
                <Switch>
                  <Route exact path="/" component={Welcome}/>
                  <Route exact path="/Profile" component={Profile}/>
                  <Route exact path="/Employee" component={Employee}/>
                  <Route exact path="/Registration" component={Registration}/>
                  <Route exact path="/JobDetail/:id" component={JobDetails}/>
                  <Route exact path="/JobListing" component={JobListing}/>
                  <Route exact path="/Qualifiers" component={Qualifiers}/>
                  <Route exact path="/Jobseeker" component={Jobseeker}/>
                </Switch>
              </div>
              <div className="col-md">
                <SideCards/>
              </div>
            </div>
          </section>
        </Router>
    </div>
  );
}

export default App;