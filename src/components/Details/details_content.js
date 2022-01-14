// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { getYachtsThunk } from './apiManager';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Details.css';
// import yachts from './data';

const DetailsContent = () => { // eslint-disable-line
  // const dispatch = useDispatch();
  // const yachts = useSelector((store) => store.yachts);

  // console.log(yachts[0]?.[1]);

  // useEffect(() => {
  //   dispatch(getYachtsThunk());
  // }, []);

  // UseLocation ------------->
  const location = useLocation();
  const currentYacht = location.state;
  // console.log(location);
  // const currentYachtImage = currentYacht.image;

  return (
    <div id="details-content">
      <img alt="current yacht" src={currentYacht.image} />
      <div>
        <div>
          <h2>YACHT 1</h2>
          <p>- $350 deposit upon any Yacht purchase†</p>
        </div>
        <div>
          <p>
            Price Per Hour
            <span>$129</span>
          </p>
          <p>
            Max Time
            <span>$249</span>
          </p>
          <p>
            Insurence
            <span>$1</span>
          </p>
          <p>
            Extra person fee
            <span>$1000</span>
          </p>
        </div>
        <Link
          to={{
            pathname: '/home',
          }}
        >
          <div>
            Reserve
          </div>
        </Link>
      </div>
      <Link
        to={{
          pathname: '/home',
        }}
      >
        <div>
          HOME
        </div>
      </Link>
    </div>
  );
};

export default DetailsContent;
