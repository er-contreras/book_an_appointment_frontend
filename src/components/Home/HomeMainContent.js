import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import { getYachtsThunk } from '../apiManager';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Home.css';

const HomeMainContent = () => {
  const dispatch = useDispatch();
  const yachts = useSelector((store) => store.yachts);
  const yachtsObj = yachts[0]?.[1];

  useEffect(() => {
    dispatch(getYachtsThunk());
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="home-main-content">
      <div id="yachts-title">
        <h1>LATEST YACHTS</h1>
        <p>Please select a Yacht</p>
        <div className="dots" />
      </div>

      <Slider {...settings} id="yachts-content">
        {yachtsObj?.map((obj) => (
          <div className="items" key={uuidv4()}>
            <Link
              className="link-to-details"
              to="/details"
              state={{
                image: obj.picture,
                name: obj.name,
                pricePerHour: obj.price_per_hour,
                extraPersonFee: obj.extra_person_fee,
                insurance: obj.insurance,
                maxTime: obj.max_time,
                reserved: obj.reserved,
              }}
            >
              <img alt="yacht" src={`http://localhost:3000${obj.picture}`} />
            </Link>
            <div className="dots" />
            <h2>{obj.name}</h2>
            <p>{obj.description}</p>
            <div className="yachts-social-media">
              <FontAwesomeIcon className="content-icon" icon={faFacebook} />
              <FontAwesomeIcon className="content-icon" icon={faTwitter} />
              <FontAwesomeIcon className="content-icon" icon={faInstagram} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeMainContent;
