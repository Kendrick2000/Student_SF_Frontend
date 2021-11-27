import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Read from './Components/read';
import Create from './Components/create';
import Update from './Components/update';
import Find from './Components/find';

function App() {
  return(
    <Router>
      <div>
        <nav> 
          <ul> 
            <li> 
              <Link to="/create">Create Product</Link> 
            </li> 
          </ul> 
        </nav>
        <Routes>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
        </Routes>
        <Read/>
        <Find/>
      </div>
    </Router>
  );
}
export default App;
