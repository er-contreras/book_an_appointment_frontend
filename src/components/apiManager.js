import { getYachts } from '../redux/yachts/yachts';

const fetchYachts = async () => {
  const url = 'http://localhost:3000/api/v1/yachts';

  const response = await fetch(url);
  const details = await response.json();

  return details;
};

export const getYachtsThunk = () => (dispatch) => {
  fetchYachts().then((response) => {
    dispatch(getYachts(Object.entries(response)));
  });
};

export default fetchYachts;
