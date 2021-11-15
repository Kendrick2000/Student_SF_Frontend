import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const STUDENT_API_URL = 'http://localhost:8080/api/a1/student';

export default function StudentProfiles (){
  const [studentProfiles, setStudentProfiles] = useState([]);
  const fetchForApi = () => {
    axios.get(STUDENT_API_URL).then((rsp) => {
      console.log(rsp.data);
      setStudentProfiles(rsp.data);
    });
  };

  const getData = () => {
      axios.get(`http://localhost:8080/api/a1/student`)
      .then((getData) => {
          setStudentProfiles(getData.data);
      })
  }
  
  const onDelete = (id) => {
      axios.delete(`http://localhost:8080/api/a1/student/${id}`)
      .then(() => {
          getData();
      })
  }

  const setData = (data) => {
        let {id, name, parentName, address, phoneNum, email } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('parentName', parentName);
        localStorage.setItem('address', address);
        localStorage.setItem('phoneNum', phoneNum);
        localStorage.setItem('email', email);
  }

  useEffect(() => {
    fetchForApi();
  }, []);

  return (
      <div className="container">
        <h1>List of Students</h1>
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
                        <button onClick={() => onDelete(studentProfiles.id)}>Delete</button>
                    </td>
                    <Link to='/update'>
                      <td>
                        <button type="submit" onClick={() => setData(studentProfiles)}>Update</button>
                      </td>
                    </Link>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
  )
};

