import { takeEvery, call, put } from 'redux-saga/effects';
import analysis from './analysisSlice';
import fetchQuestions from '../../domain/question';

const sleep = (microSecond: number) =>
  new Promise(resolve => setTimeout(resolve, microSecond));

function* postFetchQuestionsRequest() {
  const questions = fetchQuestions();
  yield call(sleep, 1000);

  yield put(analysis.actions.fetchQuestionsSuccess(questions));
}

function* analysisSaga() {
  yield takeEvery(analysis.actions.fetchQuestions, postFetchQuestionsRequest);
}

export default analysisSaga;
