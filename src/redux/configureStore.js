import {
  createStore, applyMiddleware, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import yachtsReducer from './yachts/yachts';

const rootReducer = combineReducers({
  yachts: yachtsReducer,
});

const generateStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk),
  );
  return store;
};

export default generateStore;
