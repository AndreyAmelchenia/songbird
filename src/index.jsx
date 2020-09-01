import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';
import './style.scss';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

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
