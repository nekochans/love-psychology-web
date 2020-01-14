import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../theme/globalStyle';
import { theme } from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Counter from '../features/counter/Counter';
import Analysis from '../features/analysis/Analysis';
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
          <Route path="/analysis">
            <Analysis />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default App;
