// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// import { getYachtsThunk } from './apiManager';
import '../../styles/Home.css';
import yachts from '../data';

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
        {yachts.map((obj) => (
          <div className="items" key={uuidv4()}>
            <Link
              className="link-to-details"
              to="/details"
              state={{
                image: obj.image,
                name: obj.name,
              }}
            >
              <img className="image" alt="yacht" src={obj.image} />
              <h2>{obj.name}</h2>
              <p>{obj.description}</p>
              <ul className="yachts-social-media">
                <li>F</li>
                <li>T</li>
                <li>I</li>
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMainContent;
