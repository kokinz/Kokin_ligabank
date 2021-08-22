import {combineReducers} from 'redux';
import {ratesData} from './rates-data/rates-data.js';

const NameSpace = {
  RATES_DATA: 'RATES_DATA',
};

const combine = combineReducers({
  [NameSpace.RATES_DATA]: ratesData,
});

export {NameSpace, combine as default};
