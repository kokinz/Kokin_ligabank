import {loadRates} from './actions.js';

const key = 'access_key=390d67a89fd66891e85004f496e1975b';

const fetchRatesList = (date) => (dispatch, _getState, api) => (
  api.get(`${date}?${key}`)
    .then(({data}) => dispatch(loadRates(data.rates)))
);

export {fetchRatesList};
