// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { getYachtsThunk } from './apiManager';
import '../styles/Home.css';

const HomeMainContent = () => { // eslint-disable-line
  // const dispatch = useDispatch();
  // const yachts = useSelector((store) => store.yachts);

  // console.log(yachts[0]?.[1]);

  // useEffect(() => {
  //   dispatch(getYachtsThunk());
  // }, []);

  return (
    <div id="home-main-content">
      <div id="yachts-title">
        <h1>LATEST YACHTS</h1>
        <p>Please select a Yacht</p>
      </div>

      <div id="yachts-content">
        <div className="items">
          <h2>YACHTS 1</h2>
          <p>One of the most beutifule yachts that have you ever seen in yopur lonely live.</p>
          <ul className="yachts-social-media">
            <li>F</li>
            <li>T</li>
            <li>I</li>
          </ul>
        </div>
        <div className="items">
          <h2>YACHTS 2</h2>
          <p>One of the most beutifule yachts that have you ever seen in yopur lonely live.</p>
          <ul className="yachts-social-media">
            <li>F</li>
            <li>T</li>
            <li>I</li>
          </ul>
        </div>
        <div className="items">
          <h2>YACHTS 3</h2>
          <p>One of the most beutifule yachts that have you ever seen in yopur lonely live.</p>
          <ul className="yachts-social-media">
            <li>F</li>
            <li>T</li>
            <li>I</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeMainContent;
