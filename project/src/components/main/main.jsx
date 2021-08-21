import React from 'react';
import Promo from '../promo/promo';
import Converter from '../converter/converter';
import History from '../history/history';

function Main() {
  return(
    <main className="page-main">
      <Promo />

      <Converter />

      <History />
    </main>
  );
}

export default Main;
