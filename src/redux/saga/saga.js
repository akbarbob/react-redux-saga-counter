import {INCREMENT_SUCCESS, DECREMENT_SUCCESS} from '../actionTypes/index';
import {put, takeEvery, call, all} from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setInterval(res, ms))

function* workerIncrementAsync(){
    delay(3000)
     yield put({type:'INCREMENT_SUCCESS'})
}

function* watcherIncrement(){
  yield takeEvery(INCREMENT_SUCCESS , workerIncrementAsync)
}

function* workerDecrementAsync(){
    yield put({type:'DECREMENT_SUCCESS'})
}

function* watcherDecrement(){
    yield takeEvery(DECREMENT_SUCCESS,workerDecrementAsync)
}

export default function* rootSaga(){
    yield all([
        watcherIncrement(),
        watcherDecrement()
    ])
}
