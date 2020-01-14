import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../../domain/question';

export type AnalysisState = {
  questions?: Question[];
  isLoading: boolean;
  errorMessage: string;
};

export const initialState: AnalysisState = {
  isLoading: false,
  errorMessage: '',
};

const analysis = createSlice({
  name: 'analysis',
  initialState,
  reducers: {
    fetchQuestions: () => {},
    fetchQuestionsSuccess: (
      state: AnalysisState,
      action: PayloadAction<Question[]>,
    ) => {
      return Object.assign(state, {
        questions: action.payload,
        isLoading: false,
        errorMessage: '',
      });
    },
  },
});

export default analysis;
