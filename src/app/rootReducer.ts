import { combineReducers } from '@reduxjs/toolkit';

import counter from '../features/counter/counterSlice';
import analysis from '../features/analysis/analysisSlice';

const rootReducer = combineReducers({
  counter: counter.reducer,
  analysis: analysis.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
