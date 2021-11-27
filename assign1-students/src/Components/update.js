import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Update(){
    const [productName, setProductName] = useState('');
    const [series, setSeries] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [id, setID] = useState(null);

    const UpdateAPIData = () => {
        axios.put(`http://localhost:8080/api/v1/product/${id}`,{
            productName,
            series,
            type,
            price,
            description,
            rating
        })
    }

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setProductName(localStorage.getItem('productName'));
        setSeries(localStorage.getItem('series'));
        setType(localStorage.getItem('type'));
        setPrice(localStorage.getItem('price'));
        setDescription(localStorage.getItem('description'));
        setRating(localStorage.getItem('rating'));
    }, []);

    return(
        <form className="create-form">
            <label>Product Name</label>
            <input placeholder='Product Name' onChange={(e) => setProductName(e.target.value)} />
            <label>Series Number</label>
            <input placeholder='Series Number' onChange={(e) => setSeries(e.target.value)}/>
            <label>Type</label>
            <input placeholder='Type' onChange={(e) => setType(e.target.value)}/>
            <label>Price</label>
            <input placeholder='Price' onChange={(e) => setPrice(e.target.value)}/>
            <label>Description</label>
            <input placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
            <label>Rating</label>
            <input placeholder='Rating' onChange={(e) => setRating(e.target.value)}/>
            <button type="submit" onClick={UpdateAPIData} >Add New Student</button>
        </form>
    )
}
