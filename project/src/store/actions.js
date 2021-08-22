const ActionType = {
  LOAD_RATES: 'rates/loadRates',
  UPGRADE_RATES: 'rates/upgradeRates',
  ADD_HISTORY: 'history/addHistory',
  RESET_HISTORY: 'history/resetHistory',
};

const loadRates = (rates) => ({
  type: ActionType.LOAD_RATES,
  payload: rates,
});

const upgradeRates = () => ({
  type: ActionType.UPGRADE_RATES,
});

const addHistory = (history) => ({
  type: ActionType.ADD_HISTORY,
  payload: history,
});

const resetHistory = () => ({
  type: ActionType.RESET_HISTORY,
});


export {ActionType, loadRates, upgradeRates, addHistory, resetHistory};
