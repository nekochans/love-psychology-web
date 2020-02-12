import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoveType } from '../../domain/result';

export type ResultState = {
  loveType?: LoveType;
  allLoveTypes?: LoveType[];
  isLoading: boolean;
};

const initialState: ResultState = {
  isLoading: false,
};

const result = createSlice({
  name: 'result',
  initialState,
  reducers: {
    fetchResult: (state: ResultState) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetchResultSuccess: (
      state: ResultState,
      action: PayloadAction<LoveType>,
    ) => {
      return {
        ...state,
        loveType: action.payload,
        isLoading: false,
      };
    },
    fetchAllLoveTypes: (state: ResultState) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetchAllLoveTypesSuccess: (
      state: ResultState,
      action: PayloadAction<LoveType[]>,
    ) => {
      return {
        ...state,
        allLoveTypes: action.payload,
        isLoading: false,
      };
    },
  },
});

export default result;
