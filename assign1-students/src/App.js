import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import AddNewStudent from './AddNewStudent';

const STUDENT_API_URL = 'http://localhost:8080/api/a1/student';

const StudentProfiles = () => {
  const [studentProfiles, setStudentProfiles] = useState([]);

  const fetchForApi = () => {
    axios.get(STUDENT_API_URL).then((rsp) => {
      console.log(rsp.data);
      setStudentProfiles(rsp.data);
    });
  };
  
  useEffect(() => {
    fetchForApi();
  }, []);

  return (
    <div className="container">
      <Router>
        <Link to="/AddNewStudent" >Add Student</Link>
        <Switch>
          <Route exact path='/AddNewStudent' component={AddNewStudent}></Route>
        </Switch>    
      </Router>
      <h1>List of Sutdent</h1>
      <hr/>
      <div>
        {/* <Link to="/AddNewStudent" className="btn btn-primary mb-2">Add Student</Link> */}
        {/* <Link to="/AddNewStudent" >Add Student</Link>
        <Route path="/AddNewStudent">
          <AddNewStudent />
        </Route> */}
        <table className="table table-border">
          <thead>
            <tr>
              <td>ID</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Address</td>
              <td>Phone Number</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {
              studentProfiles.map(studentProfiles => (
                <tr key={studentProfiles.id}>
                  <td>{studentProfiles.id}</td>
                  <td>{studentProfiles.name}</td>
                  <td>{studentProfiles.parentName}</td>
                  <td>{studentProfiles.address}</td>
                  <td>{studentProfiles.phoneNum}</td>
                  <td>{studentProfiles.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
};

function App() {
  return(
    <div className="App">
      <StudentProfiles/>
    </div>
  );
}

export default App;
