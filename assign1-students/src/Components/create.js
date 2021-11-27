
import React, { useState } from "react";
import axios from "axios";

export default function Create() {
    const [productName, setProductName] = useState('');
    const [series, setSeries] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const postData = () =>{
        axios.post(`http://localhost:8080/api/v1/product`, {
            productName,
            series,
            type,
            price,
            description,
            rating
        })
    }

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
            <button type="submit" onClick={postData} >Add New Student</button>
        </form>
    )
}