import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Read from './Components/read';
import Create from './Components/create';
import Update from './Components/update';

function App() {
  return(
    // <div className="App">
    //   <div className="main">
    //     <h2 className="main-header">Student Management</h2>
    //     <div>
    //       <Create/>
    //     </div>
    //     <div>
    //       <Read/>
    //     </div>
    //   </div>
    // </div>
    <Router>
      <div>
        <nav> 
          <ul> 
            {/* <li> 
              <Link to="/">Home</Link> 
            </li>  */}
            <li> 
              <Link to="/create">Create Student</Link> 
            </li> 
            {/* <li>
              <Link to="/update">Update</Link>
            </li> */}
          </ul> 
        </nav>
        <Routes>
          {/* <Route path="/" element={<Read/>}></Route> */}
          <Route path="/create" element={<Create/>}></Route>
          {/* <Route path="/update" element={<Update/>}></Route> */}
        </Routes>
        <Read/>
      </div>
    </Router>
  );
}
export default App;
