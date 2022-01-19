// import axios from 'axios';
import { useState } from 'react';
import '../styles/form.css';

const Upload = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [time, setTime] = useState('');
  const [insurance, setInsurance] = useState('');
  const [fee, setFee] = useState('');
  const [picture, setPicture] = useState(null);

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
    formData.append('price', price);
    formData.append('time', time);
    formData.append('insurance', insurance);
    formData.append('fee', fee);
    formData.append('picture', picture);

    axios.post(UPLOAD_URL, formData) // eslint-disable-line
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label htmlFor="yacht-time">
          Max Time
          <input
            id="yacht-time"
            type="text"
            required
            value={time}
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
            value={fee}
            onChange={(e) => setFee(e.target.value)}
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
