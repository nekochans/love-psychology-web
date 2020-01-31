import { combineReducers } from '@reduxjs/toolkit';

import analysis from '../features/analysis/analysisSlice';

const rootReducer = combineReducers({
  analysis: analysis.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
