import { takeEvery, call, put } from 'redux-saga/effects';
import analysis from './analysisSlice';
import { fetchAnswers, fetchQuestions } from '../../domain/analysis';

const sleep = (microSecond: number) =>
  new Promise(resolve => setTimeout(resolve, microSecond));

function* postFetchQuestionsRequest() {
  const questions = fetchQuestions();
  yield call(sleep, 1000);

  yield put(analysis.actions.fetchQuestionsSuccess(questions));
}

function* postFetchAnswersRequest() {
  const answers = fetchAnswers();
  yield call(sleep, 1000);

  yield put(analysis.actions.fetchAnswersSuccess(answers));
}

function* analysisSaga() {
  yield takeEvery(analysis.actions.fetchQuestions, postFetchQuestionsRequest);
  yield takeEvery(analysis.actions.fetchAnswers, postFetchAnswersRequest);
}

export default analysisSaga;
