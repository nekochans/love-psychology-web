import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Counter from './components/Counter';
import Home from './components/Home';

import './App.css';

const App: FC = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/">
          <Home />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
