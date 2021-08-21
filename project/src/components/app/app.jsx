import React from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import './app.scss';

function App() {

  return (
    <>
      <h1 className="visually-hidden">Лига Банк</h1>

      <Header />

      <Main />

      <Footer />
    </>
  );
}

export default App;
