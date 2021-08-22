import {ActionType} from '../actions.js';

const initialState = {
  history: [],
};

const historyData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case ActionType.RESET_HISTORY:
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};

export {historyData};
