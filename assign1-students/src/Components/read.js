import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PRODUCT_API_URL = 'http://localhost:8080/api/v1/product';

export default function ProductProfiles (){
  const [productProfiles, setProductProfiles] = useState([]);
  const fetchForApi = () => {
    axios.get(PRODUCT_API_URL).then((rsp) => {
      console.log(rsp.data);
      setStudentProfiles(rsp.data);
    });
  };

  const getData = () => {
      axios.get(`http://localhost:8080/api/v1/product`)
      .then((getData) => {
          setProductProfiles(getData.data);
      })
  }
  
  const onDelete = (id) => {
      axios.delete(`http://localhost:8080/api/v1/product/${id}`)
      .then(() => {
          getData();
      })
  }

  const setData = (data) => {
        let {id, productName, series, type, price, description,rating } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('productName', productName);
        localStorage.setItem('series', series);
        localStorage.setItem('type', type);
        localStorage.setItem('price', price);
        localStorage.setItem('description', description);
        localStorage.setItem('rating',rating);
  }

  useEffect(() => {
    fetchForApi();
  }, []);

  return (
      <div className="container">
        <h1>List of Product</h1>
        <hr/>
        <div>
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
                productProfiles.map(productProfiles => (
                  <tr key={productProfiles.id}>
                    <td>{productProfiles.id}</td>
                    <td>{productProfiles.productName}</td>
                    <td>{productProfiles.series}</td>
                    <td>{productProfiles.type}</td>
                    <td>{productProfiles.price}</td>
                    <td>{productProfiles.description}</td>
                    <td>{productProfiles.rating}</td>
                    <td>
                        <button onClick={() => onDelete(ProductProfiles.id)}>Delete</button>
                    </td>
                    <Link to='/update'>
                      <td>
                        <button type="submit" onClick={() => setData(ProductProfiles)}>Update</button>
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

