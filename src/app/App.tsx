import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../theme/globalStyle';
import { theme } from '../theme';
import Header from '../components/Header';
import Counter from '../features/counter/Counter';
import Home from '../components/Home';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header />
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
    </ThemeProvider>
  );
};
export default App;
