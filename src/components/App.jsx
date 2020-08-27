import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import Home from './main/Home';
import Error from './main/Error';
import URL from '../constants/Url';
import Finish from './main/Finish';

const App = () => {
  const { url } = useParams();
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/finish">
          <Finish />
        </Route>
        <Route>
          {URL.indexOf(url) !== -1 ? <Main /> : <Error />}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
