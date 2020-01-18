import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer, Question } from '../../domain/analysis';

export type AnalysisState = {
  questions?: Question[];
  answers?: Answer[];
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
    fetchAnswers: () => {},
    fetchAnswersSuccess: (
      state: AnalysisState,
      action: PayloadAction<Answer[]>,
    ) => {
      return Object.assign(state, {
        answers: action.payload,
        isLoading: false,
        errorMessage: '',
      });
    },
  },
});

export default analysis;
