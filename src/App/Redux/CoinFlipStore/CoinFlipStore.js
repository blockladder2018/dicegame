import { createActions, createReducer}  from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  coinSideChosen: "front", // Options: 'front', 'back'
  betRate: 0.10,  // range: [0.05, 2.04]
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setCoinSideChosen: ["coinSideChosen"],
  setBetRate: ["betRate"],
  clear: null,
});

/* ------------- Reducers ------------- */
const setCoinSideChosenReducer = (state = INITIAL_STATE, { coinSideChosen }) => {
  return state.merge({ coinSideChosen});
};

const setBetRateReducer = (state = INITIAL_STATE, { betRate }) => {
  return state.merge({ betRate });
};

const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_COIN_SIDE_CHOSEN]: setCoinSideChosenReducer,
  [Types.SET_BET_RATE]: setBetRateReducer,
  [Types.CLEAR]: clearReducer,
});

export default {
  action: Creators,
  reducer: reducer,
}
