import React, {useState} from 'react';
import Promo from '../promo/promo';
import DatePicker from 'react-datepicker';

function Main() {
  const [startDate, setStartDate] = useState(new Date());

  return(
    <main className="page-main">
      <Promo />

      <section className="converter">
        <h2 className="converter__header">
          Конвертер валют
        </h2>

        <form className="converter__form">
          <label className="converter__label">
            У меня есть
          </label>

          <input className="converter__first-value" />

          <select className="converter__first-currency">
            <option>RUB</option>
            <option>USD</option>
            <option>EUR</option>
            <option>GBR</option>
            <option>CNY</option>
          </select>

          <label className="converter__label">
            Хочу приобрести
          </label>

          <input className="converter__second-value" />

          <select className="converter__second-currency">
            <option>RUB</option>
            <option selected>USD</option>
            <option>EUR</option>
            <option>GBR</option>
            <option>CNY</option>
          </select>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date().setDate(new Date().getDate() - 7)}
            maxDate={new Date()}
          />

          <button className="converter__button button" type="submit">Сохранить результат</button>
        </form>
      </section>

      <section className="history">
        <h2 className="history__header">
          История конвертация
        </h2>

        <ul className="history__list">
          <li className="history__item">
            <span className="history__date">
              25.11.2020
            </span>
            <span className="history__first-value">
              1000
            </span>
            <span className="history__first-currency">
              RUB
            </span>
            <span className="history__second-value">
              13,1234
            </span>
            <span className="history__second-currency">
              USD
            </span>
          </li>
        </ul>

        <button className="history__button button">
          Очистить историю
        </button>
      </section>
    </main>
  );
}

export default Main;
