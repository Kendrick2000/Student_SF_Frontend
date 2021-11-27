import React, { useState } from "react";
import axios from "axios";

export default function Find () {
    const [data,setData] = useState([]);
    const [productName, setProductName] = useState('');

    const getProduct = () => {
        axios.get(`http://localhost:8080/api/v1/product/${productName}`)
        .then((getData) => {
          setData(getData.data);
        })
    }
    return(
        <div>
            <label>Search product by product name</label>
            <input type="text" placeholder="product name" onChange={(e) => setProductName(e.target.value)}/>
            <button type="submit" onClick={getProduct}>Search</button>

            <table className="table table-border">
            <thead>
              <tr>
                <td>ID</td>
                <td>Product Name</td>
                <td>Series</td>
                <td>Type</td>
                <td>Price</td>
                <td>Description</td>
                <td>Rating</td>
              </tr>
            </thead>
            <tbody>
              {
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.productName}</td>
                    <td>{data.series}</td>
                    <td>{data.type}</td>
                    <td>{data.price}</td>
                    <td>{data.description}</td>
                    <td>{data.rating}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        
    )
}