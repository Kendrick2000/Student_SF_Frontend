import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Update(){
    const [name, setName] = useState('');
    const [parentName, setParentName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [id, setID] = useState(null);

    const UpdateAPIData = () => {
        axios.put(`http://localhost:8080/api/a1/student/${id}`,{
            id,
            name, 
            parentName, 
            address,
            phoneNum,
            email
        })
    }

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setName(localStorage.getItem('name'));
        setParentName(localStorage.getItem('parentName'));
        setAddress(localStorage.getItem('address'));
        setPhoneNum(localStorage.getItem('phoneNum'));
        setEmail(localStorage.getItem('email'));
    }, []);

    return(
        <form className="create-form">
            <label>ID</label>
            <input placeholder='ID' onChange={(e) => setID(e.target.value)} />
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
            <button type='submit' onClick={UpdateAPIData}>Update Student</button>
        </form>
    )
}
