import { createStore, combineReducers } from "redux";

import ApplicationStore from "./ApplicationStore";
import CoinFlipStore from "./CoinFlipStore";

import { reducer as forms } from "redux-form";

const singletonStore = createStore(combineReducers({
  application: ApplicationStore.reducer,
  coinFlip: CoinFlipStore.reducer,
  forms: forms,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default singletonStore;
