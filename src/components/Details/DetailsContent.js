// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { getYachtsThunk } from './apiManager';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Details.css';
// import yachts from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const DetailsContent = () => {
  // const dispatch = useDispatch();
  // const yachts = useSelector((store) => store.yachts);

  // console.log(yachts[0]?.[1]);

  // useEffect(() => {
  //   dispatch(getYachtsThunk());
  // }, []);

  // UseLocation ------------->
  const location = useLocation();
  const currentYacht = location.state;

  return (
    <>
      <div id="details-content">
        <div className="image-details">
          <div className="yacht-details">
            <div className="yacht-image-content">
              <img className="yacht-image" alt="current yacht" src={`http://localhost:3000${currentYacht.image}`} />
            </div>
            <div className="details">
              <div className="details-title">
                <h2>{currentYacht.name}</h2>
                <p>- $350 deposit upon any Yacht purchase†</p>
              </div>
              <div className="costs">
                <p>
                  Price Per Hour
                  <span>
                    $
                    {currentYacht.pricePerHour}
                  </span>
                </p>
                <p>
                  Max Time
                  <span>
                    $
                    {currentYacht.maxTime}
                  </span>
                </p>
                <p>
                  Insurance
                  <span>
                    $
                    {currentYacht.insurance}
                  </span>
                </p>
                <p>
                  Extra person fee
                  <span>
                    $
                    {currentYacht.extraPersonFee}
                  </span>
                </p>
              </div>

              <div className="reserve-content">
                <div className="reserve-link">
                  <Link
                    to={{
                      pathname: '/home',
                    }}
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="back-home">
          <Link
            to={{
              pathname: '/home',
            }}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailsContent;
