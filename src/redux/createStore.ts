import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import counterModule from './modules/counterModule';
import rootSaga from './middleware/rootSaga';

const rootReducer = combineReducers({
  counter: counterModule.reducer,
});
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

  sagaMiddleware.run(rootSaga);

  return store;
};

export default setupStore;
