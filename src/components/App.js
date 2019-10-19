import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../routes';

import './App.module.css';

const App = () => {
  return (
    <>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
        <Redirect
          to={{
            pathname: '/reader',
            search: '?item=1',
          }}
        />
      </Switch>
    </>
  );
};
export default App;
