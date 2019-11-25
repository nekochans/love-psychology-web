import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterModule from './modules/counterModule';

const rootReducer = combineReducers({
  counter: counterModule.reducer,
});

const setupStore = () => {
  const middlewareList = [...getDefaultMiddleware()];

  if (process.env.NODE_ENV !== 'production') {
    middlewareList.push(logger);
  }

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export default setupStore;
