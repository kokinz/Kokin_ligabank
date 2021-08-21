import React, {useState} from 'react';
import DatePicker from 'react-datepicker';

function Converter() {
  const [startDate, setStartDate] = useState(new Date());

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

          <input className="converter__first-value converter__value" type="number" placeholder="1000" />

          <select className="converter__first-currency converter__currency">
            <option>RUB</option>
            <option>USD</option>
            <option>EUR</option>
            <option>GBR</option>
            <option>CNY</option>
          </select>
        </fieldset>

        <fieldset className="converter__fieldset">
          <label className="converter__label">
            Хочу приобрести
          </label>

          <input className="converter__second-value converter__value" type="number" placeholder="13,1234" />

          <select className="converter__second-currency converter__currency">
            <option>RUB</option>
            <option selected>USD</option>
            <option>EUR</option>
            <option>GBR</option>
            <option>CNY</option>
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

export default Converter;
