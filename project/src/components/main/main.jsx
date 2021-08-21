import React from 'react';
import Promo from '../promo/promo';
import Converter from '../converter/converter';

function Main() {
  return(
    <main className="page-main">
      <Promo />

      <Converter />

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
