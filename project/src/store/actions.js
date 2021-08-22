const ActionType = {
  LOAD_RATES: 'rates/loadRates',
  UPGRADE_RATES: 'rates/upgradeRates',
};

const loadRates = (rates) => ({
  type: ActionType.LOAD_RATES,
  payload: rates,
});

const upgradeRates = () => ({
  type: ActionType.UPGRADE_RATES,
});


export {ActionType, loadRates, upgradeRates};
