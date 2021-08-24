import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getHistory} from '../../store/history-data/selectors';
import {resetHistory} from '../../store/actions';
import {LOG_VALUE_ROUNDING} from '../../const.js';

function History({history, onHistoryResetClick}) {
  const handleHistoryReset = (evt) => {
    evt.preventDefault();

    onHistoryResetClick();
  }

  return(
    <section className="history container">
      <h2 className="history__header">
        История конвертация
      </h2>

      <ul className="history__list">
        {history.map((log, index) => (
          <li className="history__item" key={`${log}-${index}`}>
            <span className="history__date">
              {log.date}
            </span>
            <span className="history__first-value">
              {log.firstValue.length > LOG_VALUE_ROUNDING ? `${log.firstValue.split('').slice(0, LOG_VALUE_ROUNDING).join('')}...` : log.firstValue}
            </span>
            <span className="history__first-currency">
              {log.firstCurrency}
            </span>
            <span className="history__second-value">
              {log.secondValue.length > LOG_VALUE_ROUNDING ? `${log.secondValue.split('').slice(0, LOG_VALUE_ROUNDING).join('')}...` : log.secondValue}
            </span>
            <span className="history__second-currency">
              {log.secondCurrency}
            </span>
          </li>
        ))}
      </ul>

      <button className="history__button button" onClick={handleHistoryReset}>
        Очистить историю
      </button>
    </section>
  );
}

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onHistoryResetClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  history: getHistory(state),
});

const mapDispatchToProps = (dispatch) => ({
  onHistoryResetClick() {
    dispatch(resetHistory());
  }
});

export {History};
export default connect(mapStateToProps, mapDispatchToProps)(History);
