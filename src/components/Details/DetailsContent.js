import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const DetailsContent = () => {
  const [reserved, setReserved] = useState(false);

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
                <button
                  className={!reserved === true ? 'button' : 'cancel'}
                  type="button"
                  onClick={() => {
                    if (reserved === true) {
                      setReserved(false);
                    } else {
                      setReserved(true);
                    }
                  }}
                >
                  {!reserved === true ? 'Reserved Yacht!' : 'Cancel Reservation'}
                </button>
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
