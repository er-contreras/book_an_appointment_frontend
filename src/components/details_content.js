// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { getYachtsThunk } from './apiManager';
import '../styles/Details.css';
// import yachts from './data';

const DetailsContent = () => { // eslint-disable-line
  // const dispatch = useDispatch();
  // const yachts = useSelector((store) => store.yachts);

  // console.log(yachts[0]?.[1]);

  // useEffect(() => {
  //   dispatch(getYachtsThunk());
  // }, []);

  return (
    <div id="details-content">
      <div>Image of the yacht</div>
      <div>Descriptive details</div>
      <div>turn back button</div>
    </div>
  );
};

export default DetailsContent;
