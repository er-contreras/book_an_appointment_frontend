const GET_YACHTS = 'GET_YACHTS';

export const getYachts = (payload) => ({
  type: GET_YACHTS,
  payload,
});

const initialData = [];

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_YACHTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
