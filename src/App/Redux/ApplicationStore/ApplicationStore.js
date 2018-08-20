import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  currentLocale: null,
  historyData: null,
};

const { Types, Creators } = createActions({
  setCurrentLocale: ["locale"],
  setHistoryData: ["historyData"],
  clearApplication: null,
});

const setCurrentLocaleReducer = (state = INITIAL_STATE, action) => {
  return Object.assign(state, {
    currentLocale: action.locale,
  });
};

const setHistoryDataReducer = (state = INITIAL_STATE, action) => {
  return Object.assign(state, {
    historyData: action.historyData,
  });
}

const clearApplicationReducer = () => INITIAL_STATE;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CURRENT_LOCALE]: setCurrentLocaleReducer,
  [Types.SET_HISTORY_DATA]: setHistoryDataReducer,
  [Types.CLEAR_APPLICATION]: clearApplicationReducer,
});

export default {
  action: Creators,
  reducer: reducer,
};
