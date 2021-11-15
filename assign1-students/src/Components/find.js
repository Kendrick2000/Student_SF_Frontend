import React, { useState } from "react";
import axios from "axios";

export default function Find () {
    const [data,setData] = useState([]);
    const [email, setEmail] = useState('');

    const getStudent = () => {
        axios.get(`http://localhost:8080/api/a1/student/${email}`)
        .then((getData) => {
          setData(getData.data);
        })
    }
    return(
        <div>
            <label>Search student by email</label>
            <input type="text" placeholder="sid@email.com" onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" onClick={getStudent}>Search</button>

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
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.parentName}</td>
                    <td>{data.address}</td>
                    <td>{data.phoneNum}</td>
                    <td>{data.email}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        
    )
}