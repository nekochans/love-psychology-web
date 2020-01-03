import { takeEvery, call, put } from 'redux-saga/effects';
import counter from './counterSlice';

const sleep = (microSecond: number) =>
  new Promise(resolve => setTimeout(resolve, microSecond));

function* decrement() {
  yield call(sleep, 1000);

  yield put(counter.actions.decrement());
}

function* increment() {
  yield call(sleep, 1000);

  yield put(counter.actions.increment());
}

function* counterSaga() {
  yield takeEvery(counter.actions.decrementAsync, decrement);
  yield takeEvery(counter.actions.incrementAsync, increment);
}

export default counterSaga;
