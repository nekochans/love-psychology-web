import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Choice, Question } from '../../domain/analysis';

export type AnalysisState = {
  questions?: Question[];
  choices?: Choice[];
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
    fetchChoices: () => {},
    fetchChoicesSuccess: (
      state: AnalysisState,
      action: PayloadAction<Choice[]>,
    ) => {
      return Object.assign(state, {
        choices: action.payload,
        isLoading: false,
        errorMessage: '',
      });
    },
  },
});

export default analysis;
