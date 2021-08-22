const ActionType = {
  LOAD_RATES: 'rates/loadRates',
  CHANGE_FIRST_CURRENCY: 'rates/changeFirstCurrency',
  CHANGE_SECOND_CURRENCY: 'rates/changeSecondCurrency',
  CHANGE_FIRST_VALUE: 'rates/changeFirstValue',
  CHANGE_SECOND_VALUE: 'rates/changeSecondValue',
};

const loadRates = (rates) => ({
  type: ActionType.LOAD_RATES,
  payload: rates,
});


export {ActionType, loadRates};
