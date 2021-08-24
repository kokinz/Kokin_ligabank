import {NameSpace} from '../root-reduser';
import {MAX_HISTORY_LOGS} from '../../const';

const getHistory = (state) => {
  const history = state[NameSpace.HISTORY_DATA].history;

  localStorage.setItem('history', JSON.stringify(history));

  if (history.length > MAX_HISTORY_LOGS) {
    return history.slice(history.length - MAX_HISTORY_LOGS);
  }

  return history;
}

export {getHistory};
