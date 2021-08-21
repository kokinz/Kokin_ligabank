import React from 'react';
import Header from '../header/header';
import Main from '../main/main';
import './app.scss';

function App() {

  return (
    <>
      <h1 className="visually-hidden">Лига Банк</h1>

      <Header />

      <Main />

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
