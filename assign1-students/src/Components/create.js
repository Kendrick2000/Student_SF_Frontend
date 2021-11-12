import React, { useState } from "react";
import axios from "axios";

export default function Create() {
    const [name, setName] = useState('');
    const [parentName, setParentName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const postData = () =>{
        axios.post(`http://localhost:8080/api/a1/student`, {
            name,
            parentName,
            address,
            phoneNum,
            email
        })
    }

    return(
        <form>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setName(e.target.value)} />
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setParentName(e.target.value)}/>
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