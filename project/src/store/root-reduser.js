import {combineReducers} from 'redux';
import {ratesData} from './rates-data/rates-data.js';
import {historyData} from './history-data/history-data.js';

const NameSpace = {
  RATES_DATA: 'RATES_DATA',
  HISTORY_DATA: 'HISTORY_DATA',
};

const combine = combineReducers({
  [NameSpace.RATES_DATA]: ratesData,
  [NameSpace.HISTORY_DATA]: historyData,
});

export {NameSpace, combine as default};
