import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import counterModule from './modules/counterModule';

const rootReducer = combineReducers({
  counter: counterModule.reducer,
});

const setupStore = () => {
  const middlewareList = [...getDefaultMiddleware()];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
  });
};

export default setupStore;
