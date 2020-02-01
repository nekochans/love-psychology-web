import { takeEvery, call, put } from 'redux-saga/effects';
import result from './resultSlice';
import { fetchResult } from '../../domain/result';

const sleep = (microSecond: number) =>
  new Promise(resolve => setTimeout(resolve, microSecond));

function* postFetchResultRequest() {
  const questions = fetchResult();
  yield call(sleep, 1000);

  yield put(result.actions.fetchResultSuccess(questions));
}

function* analysisSaga() {
  yield takeEvery(result.actions.fetchResult, postFetchResultRequest);
}

export default analysisSaga;
