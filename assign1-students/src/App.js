import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState([]);
  const endPoint = "http://localhost:8080/api/a1/student"
  useEffect(() => {
    fetch(endPoint)
      .then(response => response.json())
      .then(data => setData(data));
  });
  return (
    <div className="table">
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul> 
    </div>
  );
}

export default App;
