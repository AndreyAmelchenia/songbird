import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Container,
} from 'react-bootstrap';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import Game from './main/Game';
import Error from './main/Error';

const App = () => (
  <Container>
    <Header />
    <Switch>
      <Route exact path="/"><Main /></Route>
      <Route path="/game"><Game /></Route>
      <Route path="*"><Error /></Route>
    </Switch>
    <Footer />
  </Container>
);

export default App;
