import React from 'react';

function Header() {
  return(
    <header className="header container">
      <a class="header__logo link" href="/" aria-label="Лига Банк">
        <svg className="header__logo-image" viewBox="0 0 30 27" width={28} height={25}>
          <use xlinkHref="#logo" />
        </svg>

        ЛИГА Банк
      </a>

      <nav class="header__nav nav">
        <ul class="nav__list list">
          <li class="nav__item">
            <a class="nav__link link" href="/">Услуги</a>
          </li>
          <li class="nav__item">
            <a class="nav__link link" href="/">Рассчитать кредит</a>
          </li>
          <li class="nav__item">
            <a class="nav__link link nav__link--active" href="/">Конвертер валют</a>
          </li>
          <li class="nav__item">
            <a class="nav__link link" href="/">Контакты</a>
          </li>
          <li class="nav__item">
            <a class="nav__link link" href="/">Задать вопрос</a>
          </li>
        </ul>

        <a class="nav__user-link link" href="/" aria-label="Авторизация">
          <svg viewBox="0 0 20 22" width="20" height="22">
            <use xlinkHref="#user-login"></use>
          </svg>

          Войти в Интернет-банк
        </a>
      </nav>
    </header>
  );
}

export default Header;
