import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../Main/';
import Login from '../Login/';
import Favorites from '../Favorites/';
import Room from '../Room/';
import NotFound from '../NotFound/';

function app() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/room/:id?" component={Room} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/" exact component={Main} />
        <Route path="" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default app;
