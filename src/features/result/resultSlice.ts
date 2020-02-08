import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoveType } from '../../domain/result';

export type ResultState = {
  loveType?: LoveType;
  allLoveTypes?: LoveType[];
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
    fetchAllLoveTypes: () => {},
    fetchAllLoveTypesSuccess: (
      state: ResultState,
      action: PayloadAction<LoveType[]>,
    ) => {
      return {
        ...state,
        allLoveTypes: action.payload,
      };
    },
  },
});

export default result;
