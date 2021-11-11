import React, { useState } from "react";
import axios from "axios";

const STUDENT_API_URL = 'http://localhost:8080/api/a1/student';

const StudentForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const postData = () =>{
        axios.post(STUDENT_API_URL, {
            firstName,
            lastName,
            address,
            phoneNum,
            email
        })
    }

    return(
        <form>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
            <label>Address</label>
            <input placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
            <label>Phone Number</label>
            <input placeholder='Phone Number' onChange={(e) => setPhoneNum(e.target.value)}/>
            <label>Email</label>
            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" onClick={postData} >Add New Student</button>
        </form>
    )
}

export default StudentForm;