import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../common/routes';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Auth from '../Auth/Auth';
import Dashboard from '../Dashboard/Dashboard';
import TestPlans from '../TestPlans/TestPlans';
import TestSuites from '../TestSuites/TestSuites';

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
        <Route path={routes.dashboard}>
          {!auth.isAuthenticated ? (
            <Redirect to={routes.auth} />
          ) : (
            <>
              <NavigationBar />
              <Switch>
                <Route exact path={routes.dashboard} component={Dashboard} />
                <Route exact path={routes.testPlans} component={TestPlans} />
                <Route exact path={routes.testSuites} component={TestSuites} />
              </Switch>
            </>
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
