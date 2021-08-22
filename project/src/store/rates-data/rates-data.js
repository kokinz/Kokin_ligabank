import {ActionType} from '../actions.js';

const initialState = {
  rates: {},
  isDataLoaded: false,
};

const ratesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_RATES:
      return {
        ...state,
        rates: action.payload,
        isDataLoaded: true,
      };
    case ActionType.UPGRADE_RATES:
      return {
        ...state,
        isDataLoaded: false,
      };
    default:
      return state;
  }
};

export {ratesData};
