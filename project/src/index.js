import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';

import {createAPI} from './services/api';
import rootReducer from './store/root-reduser.js';
import {fetchRatesList} from './store/api-actions';

import {APIRoute} from './const';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(createAPI()))
));


store.dispatch(fetchRatesList(APIRoute.TODAY));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
