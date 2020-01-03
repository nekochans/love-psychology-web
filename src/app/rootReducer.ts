import { combineReducers } from '@reduxjs/toolkit';

import counter from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  counter: counter.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
