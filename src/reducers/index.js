import { combineReducers } from 'redux';

import CoinFlipReducer from './reducer-coin-flip';

const rootReducer = combineReducers({
  coinFlip: CoinFlipReducer,
});

export default rootReducer;
