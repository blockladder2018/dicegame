import { createActions, createReducer}  from 'reduxsauce';
import Immutable from 'seamless-immutable';
import store from '../redux';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  coinSideChosen: 'front', // Options: 'front', 'back'
  betRate: 0.10,  // range: [0.05, 2.04]
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setCoinSideChosen: ['coinSideChosen'],
  setBetRate: ['betRate'],
  clear: null,
});

export default Creators;

/* ------------- Reducers ------------- */
export const setCoinSideChosenReducer = (state = INITIAL_STATE, { coinSideChosen }) => {
  return state.merge({ coinSideChosen});
};

export const setBetRateReducer = (state = INITIAL_STATE, { betRate }) => {
  return state.merge({ betRate });
};

export const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_COIN_SIDE_CHOSEN]: setCoinSideChosenReducer,
  [Types.SET_BET_RATE]: setBetRateReducer,
  [Types.CLEAR]: clearReducer,
});
