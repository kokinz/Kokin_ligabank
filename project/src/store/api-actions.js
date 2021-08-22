import {loadRates} from './actions.js';
import {APIRoute, Currency} from '../const.js';

const fetchRatesList = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.TODAY}/${Currency.RUB}`)
    .then(({data}) => dispatch(loadRates(data.conversion_rates)))
);

export {fetchRatesList};
