import { useState } from 'react';
import '../styles/form.css';

const Upload = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [time, setTime] = useState('');
  const [insurance, setInsurance] = useState('');
  const [fee, setFee] = useState('');
  // const [picture, setPicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInputs = {
      name, price, time, insurance, fee,
    };
    console.log(formInputs);
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
        {/* <label htmlFor="yacht-picture">
          Upload an Image
          <input
            id="yacht-picture"
            type="file"
            value={picture}
            onChange={(e) => setPicture(e.target.files[0])}
          />
        </label> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Upload;
