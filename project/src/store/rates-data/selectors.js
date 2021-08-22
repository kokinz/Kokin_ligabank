import {NameSpace} from '../root-reduser';

const getRates = (state) => state[NameSpace.RATES_DATA].rates;
const getIsDataLoaded = (state) => state[NameSpace.RATES_DATA].isDataLoaded;

export {getRates, getIsDataLoaded};
