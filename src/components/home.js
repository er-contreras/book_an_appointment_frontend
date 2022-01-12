import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getYachtsThunk } from './apiManager';

const Home = () => {
  const dispatch = useDispatch();
  const yachts = useSelector((store) => store.yachts);

  // console.log(yachts[0]?.[1]);

  useEffect(() => {
    dispatch(getYachtsThunk());
  }, []);

  return (
    <>
      <div>
        <h1>Hello there!</h1>
      </div>

      {yachts[0]?.map((arr) => {
        const { description } = arr;
        const extraPersonFee = arr.extra_person_fee;
        const { insurence } = arr;
        const maxTime = arr.max_time;
        const pricePerHour = arr.price_per_hour;

        return (
          <ul key={uuidv4()}>
            <li>{description}</li>
            <li>{extraPersonFee}</li>
            <li>{insurence}</li>
            <li>{maxTime}</li>
            <li>{pricePerHour}</li>
          </ul>
        );
      })}
    </>
  );
};

export default Home;
