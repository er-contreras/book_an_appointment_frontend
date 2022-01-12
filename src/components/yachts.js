import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getYachtsThunk } from './apiManager';

const Yachts = () => {
  const dispatch = useDispatch();
  const yachts = useSelector((store) => store.yachts);

  console.log(yachts[0]?.[1].description);

  useEffect(() => {
    dispatch(getYachtsThunk());
  }, []);

  return (
    <>
      <div>
        <h1>Hello there!</h1>
      </div>

      {/* {yachts[0]?.[1].map((arr) => {
        // const values = Object.values(arr.description);
        const description = arr;

        return (
          <div key={uuidv4()}>
            <li>{description}</li>
          </div>
        );
      })} */}
    </>
  );
};

export default Yachts;
