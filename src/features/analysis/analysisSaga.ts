import { takeEvery, call, put } from 'redux-saga/effects';
import analysis from './analysisSlice';
import { fetchChoices, fetchQuestions } from '../../domain/analysis';

const sleep = (microSecond: number) =>
  new Promise(resolve => setTimeout(resolve, microSecond));

function* postFetchQuestionsRequest() {
  const questions = fetchQuestions();
  yield call(sleep, 1);

  yield put(analysis.actions.fetchQuestionsSuccess(questions));
}

function* postFetchChoicesRequest() {
  const choices = fetchChoices();
  yield call(sleep, 1);

  yield put(analysis.actions.fetchChoicesSuccess(choices));
}

function* analysisSaga() {
  yield takeEvery(analysis.actions.fetchQuestions, postFetchQuestionsRequest);
  yield takeEvery(analysis.actions.fetchChoices, postFetchChoicesRequest);
}

export default analysisSaga;
