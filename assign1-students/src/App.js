import './App.css';
import React, {useState} from 'react';
<<<<<<< HEAD
import StudentComponent from './StudentComponent';

function App() {
  return(
    <div className="App">
      <StudentComponent/>
=======

function App() {
  const [name, setName] = useState('');
  const [parentName, setParentName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const endPoint = 'https://localhost:8080/api/a1/student'
  const save = () => {
    fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({first_name: name, parent_name: parentName, address: address, phone_number: phoneNum, email: email})
    }).then(data => data.json)
  }
  return (
    <div className="form">
      Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      Parent Name:<input type="text" value={parentName} onChange={(e)=>setParentName(e.target.value)} />
      Address:<input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
      Phone Number:<input type="text" value={phoneNum} onChange={(e)=>setPhoneNum(e.target.value)} />
      Email:<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button onClick={() => save()}>Save</button>
>>>>>>> parent of 082afea (Saving student)
    </div>
  );
}

export default App;
