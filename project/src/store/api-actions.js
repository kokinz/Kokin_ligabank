import {loadRates} from './actions.js';
import {KEY} from '../const.js';


const fetchRatesList = (date) => (dispatch, _getState, api) => (
  api.get(`${date}?${KEY}`)
    .then(({data}) => dispatch(loadRates(data.rates)))
);

export {fetchRatesList};
