import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../common/routes';
import Auth from '../Auth/Auth';
import Dashboard from '../Dashboard/Dashboard';

import './App.scss';

const App = () => {
  const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.auth}>
          {auth.isAuthenticated ? <Redirect to={routes.dashboard} /> : <Auth />}
        </Route>
        <Route exact path={routes.dashboard}>
          {!auth.isAuthenticated ? (
            <Redirect to={routes.auth} />
          ) : (
            <Dashboard />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
