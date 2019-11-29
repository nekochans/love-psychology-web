import { createSlice } from '@reduxjs/toolkit';

export interface RootState {
  counter: CounterState;
}

export type CounterState = {
  count: number;
};

export const initialState: CounterState = {
  count: 0,
};

const counterModule = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      return { ...state, count: state.count + 1 };
    },
    incrementAsync: () => {},
    decrement: (state: CounterState) => {
      return { ...state, count: state.count - 1 };
    },
    decrementAsync: () => {},
  },
});

export default counterModule;
