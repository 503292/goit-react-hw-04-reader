import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Reader from './Reader/Reader';

import './App.module.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/reader" component={Reader} />
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
