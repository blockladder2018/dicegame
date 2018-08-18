import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  currentLocale: null,
};

const { Types, Creators } = createActions({
  setCurrentLocale: ["locale"],
  clearApplication: null,
});

const setCurrentLocaleReducer = (state=INITIAL_STATE, action) => {
  return Object.assign(state, {
    currentLocale: action.locale,
  });
};

const clearApplicationReducer = () => INITIAL_STATE;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CURRENT_LOCALE]: setCurrentLocaleReducer,
  [Types.CLEAR_APPLICATION]: clearApplicationReducer,
});

export default {
  action: Creators,
  reducer: reducer,
};
