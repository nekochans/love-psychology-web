import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import counterSaga from '../features/counter/counterSaga';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const setupStore = () => {
  const middlewareList = [...getDefaultMiddleware(), sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewareList.push(logger);
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(counterSaga);

  return store;
};

export default setupStore;
