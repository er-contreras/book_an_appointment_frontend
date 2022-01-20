import {
  createStore, applyMiddleware, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import yachtsReducer from './Yachts/Yachts';

const rootReducer = combineReducers({
  yachts: yachtsReducer,
});

export default function generateStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk),
  );
  return store;
}
