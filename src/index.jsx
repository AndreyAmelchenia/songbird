import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';
import './style.scss';

const store = createStore(reducer, compose(applyMiddleware(thunk),
// eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/:url?">
        <App />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
