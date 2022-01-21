import axios from 'axios';
import React, { useState } from 'react';
import '../styles/form.css';

const Upload = () => {
  const [name, setName] = useState('');
  const [pricePerHour, setPrice] = useState('');
  const [maxTime, setTime] = useState('');
  const [insurance, setInsurance] = useState('');
  const [extraPersonFee, setFee] = useState('');
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price_per_hour', pricePerHour);
    formData.append('description', description);
    formData.append('max_time', maxTime);
    formData.append('insurance', insurance);
    formData.append('extra_person_fee', extraPersonFee);
    formData.append('picture', picture);
    try {
      const response = axios({
        method: 'post',
        url: 'http://localhost:3000/api/v1/yachts',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response); // eslint-disable-line
    } catch (error) {
      console.log(error); // eslint-disable-line
    }
  };

  const handleFileSelect = (event) => {
    setPicture(event.target.files[0]);
  };

  return (
    <div className="yacht-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="yacht-name">
          Name Of The Yacht
          <input
            id="yacht-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="yacht-price">
          Price Per Hour
          <input
            id="yacht-price"
            type="text"
            required
            value={pricePerHour}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label htmlFor="yacht-time">
          Max Time
          <input
            id="yacht-time"
            type="text"
            required
            value={maxTime}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label htmlFor="yacht-insurance">
          Insurance
          <input
            id="yacht-insurance"
            type="text"
            required
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
          />
        </label>
        <label htmlFor="yacht-fee">
          Extra Person Fee
          <input
            id="yacht-fee"
            type="text"
            required
            value={extraPersonFee}
            onChange={(e) => setFee(e.target.value)}
          />
        </label>
        <label htmlFor="yacht-fee">
          Description
          <input
            id="yacht-fee"
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label htmlFor="yacht-picture">
          Upload an Image
          <input
            id="yacht-picture"
            type="file"
            onChange={handleFileSelect}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Upload;
