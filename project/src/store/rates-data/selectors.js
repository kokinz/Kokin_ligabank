import {NameSpace} from '../root-reduser';

const getRates = (state) => state[NameSpace.RATES_DATA].rates;
const getIsDataLoaded = (state) => state[NameSpace.RATES_DATA].isDataLoaded;
// const getSecondCurrency = (state) => state[NameSpace.RATES_DATA].secondCurrency;
// const getFirstValue = (state) => state[NameSpace.RATES_DATA].firstValue;
// const getSecondValue = (state) => state[NameSpace.RATES_DATA].secondValue;
// const getQuotation = (state) => state[NameSpace.RATES_DATA].quotation;

export {getRates, getIsDataLoaded};
