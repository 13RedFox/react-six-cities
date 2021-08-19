import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Favorites from '../Favorites';
import Login from '../Login';
import Main from '../Main';
import Room from '../Room';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="/offer" exact>
          <Room />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
