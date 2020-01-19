import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer, Choice, Question } from '../../domain/analysis';

export type AnalysisState = {
  questions: Question[];
  choices?: Choice[];
  answers: Answer[];
  perPage: number;
  isLoading: boolean;
  errorMessage: string;
};

export const initialState: AnalysisState = {
  questions: [],
  answers: [],
  perPage: 5,
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
      const answers: Answer[] = action.payload.map(question => {
        return { questionId: question.id.toString(), choiceId: '' };
      });

      // TODO 質問の総数がperPageの場合の考慮
      return Object.assign(state, {
        questions: action.payload,
        answers,
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
    updateAnswers: (
      state: AnalysisState,
      userAnswer: PayloadAction<Answer>,
    ) => {
      const answers: Answer[] = state.answers.map(answer => {
        if (answer.questionId === userAnswer.payload.questionId) {
          return {
            questionId: answer.questionId,
            choiceId: userAnswer.payload.choiceId,
          };
        }

        return { questionId: answer.questionId, choiceId: answer.choiceId };
      });

      return Object.assign(state, {
        answers,
      });
    },
  },
});

export default analysis;
