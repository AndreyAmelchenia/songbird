import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route, useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import Game from './main/Game';
import Error from './main/Error';
import { URL } from '../constants/Url';
import Finish from './main/Finish';

const App = () => {
  const { url } = useParams();
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/">
          <Game />
        </Route>
        <Route exact path="/finish">
          <Finish />
        </Route>
        <Route>
          {URL.indexOf(url) !== -1 ? <Main /> : <Error />}
        </Route>
      </Switch>

      <Footer />
    </Container>
  );
};

export default App;
// const url = useParams();
// const { state } = useLocation();
// const { answer } = useSelector((state) => state.answers).filter((e) => e.name === 'finish')[0];
// const visibleMain = getVisibleMain(url.url);
// const main = state.question !== 6 ? <Main /> : <Error />;
// const home = !url.url ? <Game /> : <Main />;
