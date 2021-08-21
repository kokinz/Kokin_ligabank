import React from 'react';

function Footer() {
  return(
    <footer className="footer container">
      <div className="footer__logo-wrapper">
        <a class="footer__logo link" href="/" aria-label="Лига Банк">
          <svg className="footer__logo-image" viewBox="0 0 30 27" width={28} height={25}>
            <use xlinkHref="#logo" />
          </svg>

          ЛИГА Банк
        </a>

        <p className="footer__address">
          150015, г. Москва, ул. Московская, д. 32
        </p>

        <p className="footer__license">
          Генеральная лицензия Банка России №1050 <br />
          Ⓒ Лига Банк, 2019
        </p>
      </div>

      <nav class="footer__nav nav">
        <ul class="footer__list">
          <li class="footer__item">
            <a class="footer__link link" href="/">Услуги</a>
          </li>
          <li class="footer__item">
            <a class="footer__link link" href="/">Рассчитать кредит</a>
          </li>
          <li class="footer__item">
            <a class="footer__link link" href="/">Контакты</a>
          </li>
          <li class="footer__item">
            <a class="footer__link link" href="/">Задать вопрос</a>
          </li>
        </ul>
      </nav>

      <div className="footer__contact-number footer__contact-number--mobile">
        <a href="tel:*0904" className="footer__phone-number footer__phone-number--mobile link">
          <svg className="footer__mobile-image" viewBox="0 0 10 16" width={10} height={16}>
            <use xlinkHref="#mobile-phone" />
          </svg>

          *0904
        </a>

        <p className="footer__phone-description">
          Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
        </p>
      </div>

      <div className="footer__contact-number">
        <a href="tel:88001112233" className="footer__phone-number link">
          <svg className="footer__phone-image" viewBox="0 0 16 16" width={16} height={16}>
            <use xlinkHref="#phone" />
          </svg>

          8 800 111 22 33
        </a>

        <p className="footer__phone-description">
          Бесплатный для всех городов России
        </p>
      </div>

      <ul class="footer__social">
        <li>
          <a href="/" aria-label="Facebook">
            <svg width="9" height="16" viewBox="0 0 9 16">
              <use xlinkHref="#facebook"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="/" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <use xlinkHref="#instagram"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="/" aria-label="Twitter">
            <svg width="16" height="13" viewBox="0 0 16 13">
              <use xlinkHref="#twitter"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="/" aria-label="Youtube">
            <svg width="16" height="13" viewBox="0 0 16 13">
              <use xlinkHref="#youtube"></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
