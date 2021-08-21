import React from 'react';
import Promo from '../promo/promo';
import Converter from '../converter/converter';
import History from '../history/history';

function Main() {
  return(
    <main className="page-main">
      <h1 className="visually-hidden">Лига Банк</h1>

      <Promo />

      <Converter />

      <History />
    </main>
  );
}

export default Main;
