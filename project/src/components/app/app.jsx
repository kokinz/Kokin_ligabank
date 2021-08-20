import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import Header from '../header/header';
import './app.scss';

function App() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <h1 className="visually-hidden">Лига Банк</h1>

      <Header />

      <main className="page-main">
        <section className="promo">
          <h2 className="promo__header">Лига Банк</h2>

          <p className="promo__description">Кредиты на любой случай</p>

          <a href="/" class="promo__link button">Рассчитать кредит</a>
        </section>

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

      <footer className="page-footer">
        <a class="footer__logo" href="/" aria-label="Лига Банк">
          <img src="img/content/logo.svg" width="150" height="27" alt="Логотип Лига Банк" />
        </a>

        <p className="footer__address">
          150015, г. Москва, ул. Московская, д. 32
        </p>

        <p className="footer__license">
          Генеральная лицензия Банка России №1050 <br />
          Ⓒ Лига Банк, 2019
        </p>

        <nav class="footer__nav nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a class="nav__link" href="/">Услуги</a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="/">Рассчитать кредит</a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="/">Контакты</a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="/">Задать вопрос</a>
            </li>
          </ul>
        </nav>

        <div className="footer__contact-number footer__contact-number--mobile">
          <a href="tel:*0904" className="footer__phone-number">
            *0904
          </a>

          <p className="footer__phone-description">
            Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
          </p>
        </div>

        <div className="footer__contact-number">
          <a href="tel:88001112233" className="footer__phone-number">
            8 800 111 22 33
          </a>

          <p className="footer__phone-description">
            Бесплатный для всех городов России
          </p>
        </div>

        <ul class="footer__social">
          <li>
            <a href="/" aria-label="Facebook">
              <svg width="26" height="15">
                <use xlinkHref="img/sprite_auto.svg#icon-fb"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="/" aria-label="Instagram">
              <svg width="16" height="16">
                <use xlinkHref="img/sprite_auto.svg#icon-inst"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="/" aria-label="Twitter">
              <svg width="16" height="13">
                <use xlinkHref="img/sprite_auto.svg#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="/" aria-label="Youtube">
              <svg width="16" height="13">
                <use xlinkHref="img/sprite_auto.svg#icon-youtube"></use>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
