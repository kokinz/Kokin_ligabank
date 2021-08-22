import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import {getRates, getIsDataLoaded} from '../../store/rates-data/selectors.js';
import {Currency} from '../../const.js';

function Converter({rates, isDataLoaded}) {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState({
    rates,
    firstCurrency: Currency.RUB,
    secondCurrency: Currency.USD,
    firstValue: 1000,
    secondValue: 12.1231,
    quotation: null,
  });

  const handleFirstValueChange = (evt) => {
    setData({
      ...data,
      firstValue: evt.target.value,
      secondValue: (evt.target.value * data.quotation).toFixed(2),
    });
  };

  const handleSecondValueChange = (evt) => {
    setData({
      ...data,
      secondValue: evt.target.value,
      firstValue: (evt.target.value / data.quotation).toFixed(2),
    });
  };

  const handleFirstCurrencyChange = (evt) => {
    setData({
      ...data,
      firstCurrency: evt.target.value,
      firstValue: (data.secondValue / (rates[data.secondCurrency] / rates[evt.target.value])).toFixed(2),
      quotation: rates[data.secondCurrency] / rates[evt.target.value],
    });
  };

  const handleSecondCurrencyChange = (evt) => {
    setData({
      ...data,
      secondCurrency: evt.target.value,
      secondValue: (data.firstValue * (rates[evt.target.value] / rates[data.firstCurrency])).toFixed(2),
      quotation: rates[evt.target.value] / rates[data.firstCurrency],
    });
  };

  console.log(isDataLoaded);
console.log(data.quotation);

  if (!data.quotation && isDataLoaded) {
    setData({
      ...data,
      quotation: rates[data.secondCurrency],
      secondValue: (data.firstValue * rates[data.secondCurrency]).toFixed(2),
    });
  }

  return(
    <section className="converter container">
      <h2 className="converter__header">
        Конвертер валют
      </h2>

      <form className="converter__form">
        <fieldset className="converter__fieldset">
          <label className="converter__label">
            У меня есть
          </label>

          <input className="converter__first-value converter__value" type="number" value={data.firstValue} onChange={handleFirstValueChange} />

          <select className="converter__first-currency converter__currency" defaultValue={data.firstCurrency} onChange={handleFirstCurrencyChange}>
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
          </select>
        </fieldset>

        <fieldset className="converter__fieldset">
          <label className="converter__label">
            Хочу приобрести
          </label>

          <input className="converter__second-value converter__value" type="number" value={data.secondValue} onChange={handleSecondValueChange} />

          <select className="converter__second-currency converter__currency" defaultValue={data.secondCurrency} onChange={handleSecondCurrencyChange}>
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
          </select>
        </fieldset>

        <div className="converter__datepicker-wrapper">
          <DatePicker
            className={'converter__datepicker'}
            dateFormat="dd.MM.yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date().setDate(new Date().getDate() - 7)}
            maxDate={new Date()}
          />
        </div>


        <button className="converter__button button" type="submit">Сохранить результат</button>
      </form>
    </section>
  );
}

Converter.propTypes = {
  rates: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  rates: getRates(state),
  isDataLoaded: getIsDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData, handleSubmitError) {
    dispatch();
  },
});

export {Converter};
export default connect(mapStateToProps, mapDispatchToProps)(Converter);
