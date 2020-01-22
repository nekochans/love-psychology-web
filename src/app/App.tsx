import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../theme/globalStyle';
import { theme } from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Analysis from '../features/analysis/Analysis';
import Result from '../features/result/Result';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/analysis">
            <Analysis />
          </Route>
          <Route path="/result">
            <Result />
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
