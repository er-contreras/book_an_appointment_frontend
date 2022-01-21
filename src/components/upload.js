import axios from 'axios';
import React, { useState } from 'react';
import '../styles/form.css';

const Upload = () => {
  const [name, setName] = useState('');
  const [price_per_hour, setPrice] = useState('');
  const [max_time, setTime] = useState('');
  const [insurance, setInsurance] = useState('');
  const [extra_person_fee, setFee] = useState('');
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formInputs = {
  //     name, price, time, insurance, fee, picture,
  //   };
  //   console.log(formInputs);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("picture", picture);
  //   try {
  //     const response = await axios({
  //       method: "post",
  //       url: "/api/upload/file",
  //       data: formData,
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price_per_hour', price_per_hour);
    formData.append('max_time', max_time);
    formData.append('insurance', insurance);
    formData.append('extra_person_fee', extra_person_fee);
    formData.append('picture', picture);
    formData.append('description', description);

    axios.post('http://localhost:3000/api/v1/yachts', formData)
      .then((res) => { // eslint-disable-line
        alert('File Upload Success'); // eslint-disable-line
      })
      .catch((err) => alert('File Upload Error')); // eslint-disable-line
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
            value={price_per_hour}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label htmlFor="yacht-time">
          Max Time
          <input
            id="yacht-time"
            type="text"
            required
            value={max_time}
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
            value={extra_person_fee}
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
