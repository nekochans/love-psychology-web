import { combineReducers } from '@reduxjs/toolkit';

import analysis from '../features/analysis/analysisSlice';
import result from '../features/result/resultSlice';

const rootReducer = combineReducers({
  analysis: analysis.reducer,
  result: result.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
