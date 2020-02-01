import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer, Choice, Question } from '../../domain/analysis';

export type AnalysisState = {
  questions: Question[];
  choices: Choice[];
  answers: Answer[];
  perPage: number;
  disableNextButton: boolean;
  isLoading: boolean;
  errorMessage: string;
};

export const initialState: AnalysisState = {
  questions: [],
  choices: [],
  answers: [],
  perPage: 5,
  disableNextButton: true,
  isLoading: false,
  errorMessage: '',
};

export type AnswersPayload = {
  answer: Answer;
  start: number;
  end: number;
};

export type DisableNextButton = {
  start: number;
  end: number;
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

      // TODO 質問の総数がperPage以下の場合の考慮
      return {
        ...state,
        questions: action.payload,
        answers,
        isLoading: false,
        errorMessage: '',
      };
    },
    fetchChoices: () => {},
    fetchChoicesSuccess: (
      state: AnalysisState,
      action: PayloadAction<Choice[]>,
    ) => {
      return {
        ...state,
        choices: action.payload,
        isLoading: false,
        errorMessage: '',
      };
    },
    updateAnswers: (
      state: AnalysisState,
      action: PayloadAction<AnswersPayload>,
    ) => {
      const answers: Answer[] = state.answers.map(answer => {
        if (answer.questionId === action.payload.answer.questionId) {
          return {
            questionId: answer.questionId,
            choiceId: action.payload.answer.choiceId,
          };
        }

        return { questionId: answer.questionId, choiceId: answer.choiceId };
      });

      const answeredList = answers
        .slice(action.payload.start, action.payload.end)
        .map(answer => answer.choiceId !== '');

      const disableNextButton = answeredList.indexOf(false) !== -1;

      return { ...state, answers, disableNextButton };
    },
    updateDisableNextButton: (
      state: AnalysisState,
      action: PayloadAction<DisableNextButton>,
    ) => {
      const answeredList = state.answers
        .slice(action.payload.start, action.payload.end)
        .map(answer => answer.choiceId !== '');

      const disableNextButton = answeredList.indexOf(false) !== -1;

      return { ...state, disableNextButton };
    },
  },
});

export default analysis;
