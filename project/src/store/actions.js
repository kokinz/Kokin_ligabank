const ActionType = {
  LOAD_RATES: 'rates/loadRates',
};

const loadRates = (rates) => ({
  type: ActionType.LOAD_RATES,
  payload: rates,
});


export {ActionType, loadRates};
