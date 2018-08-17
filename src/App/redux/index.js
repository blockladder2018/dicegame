import { combineReducers } from "redux";
import configureStore from "./create-store";

const createStore = () => {
  const rootReducer = combineReducers({
    coinFlip: require("./reducer-coin-flip").reducer,
  });

  return configureStore(rootReducer);
};

const store = createStore();

export default store;
