import {ActionType} from '../actions.js';
// import {Currency} from '../../const.js';

const initialState = {
  rates: {},
  // firstCurrency: Currency.RUB,
  // secondCurrency: Currency.USD,
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
    // case ActionType.CHANGE_FIRST_CURRENCY:
    //   return {
    //     ...state,
    //     firstCurrency: action.payload,
    //   };
    // case ActionType.CHANGE_SECOND_CURRENCY:
    //   return {
    //     ...state,
    //     secondCurrency: action.payload,
    //   };
    // case ActionType.CHANGE_FIRST_VALUE:
    //   return {
    //     ...state,
    //     firstValue: action.payload,
    //   };
    // case ActionType.CHANGE_SECOND_VALUE:
    //   return {
    //     ...state,
    //     secondValue: action.payload,
    //   };
    default:
      return state;
  }
};

export {ratesData};
