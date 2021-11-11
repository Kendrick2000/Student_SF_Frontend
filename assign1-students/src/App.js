import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const STUDENT_API_URL = 'http://localhost:8080/api/a1/student';

const StudentProfiles = () => {
  const [studentProfiles, setStudentProfiles] = useState([]);

  const fetchForApi = () => {
    axios.get(STUDENT_API_URL).then((rsp) => {
      console.log(rsp.data);
      setStudentProfiles(rsp.data);
    });
  };

  const addNewStudent = (id) =>{
    axios.post(STUDENT_API_URL, {
      
    })
  } 
  
  useEffect(() => {
    fetchForApi();
  }, []);

  return (
    <div className="container">
      <h1>List of Sutdent</h1>
      <hr/>
      <div>
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
                  <td>
                    <button className="btn btn-danger ml-2" onClick={() => {
                      deletStudent(studentProfiles.id);
                    }} >Delete</button>
                  </td>
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
