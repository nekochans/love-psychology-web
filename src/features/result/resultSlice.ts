import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoveType } from '../../domain/result';

export type ResultState = {
  loveType?: LoveType;
};

const initialState: ResultState = {};

const result = createSlice({
  name: 'result',
  initialState,
  reducers: {
    fetchResult: () => {},
    fetchResultSuccess: (
      state: ResultState,
      action: PayloadAction<LoveType>,
    ) => {
      return {
        ...state,
        loveType: action.payload,
      };
    },
  },
});

export default result;
