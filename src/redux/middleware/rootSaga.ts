import { takeEvery, call, put } from 'redux-saga/effects';
import memberModule from '../modules/counterModule';

const sleep = (microSecond: number) =>
  new Promise(resolve => setTimeout(resolve, microSecond));

function* decrement() {
  yield call(sleep, 1000);

  yield put(memberModule.actions.decrement());
}

function* increment() {
  yield call(sleep, 1000);

  yield put(memberModule.actions.increment());
}

function* rootSaga() {
  yield takeEvery(memberModule.actions.decrementAsync, decrement);
  yield takeEvery(memberModule.actions.incrementAsync, increment);
}

export default rootSaga;
