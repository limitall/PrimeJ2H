// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getCarsSmall,
  getCarsMedium,
  getCarsLarge,
  // CarService,
  getPagingCarsLarge,
} from 'containers/data/CarService';

import {
  SAGA_GET_CARS_LIST,
  REDUCER_GET_CARS_LIST,
} from './constants';


export function* sagaGetCarsList(action) {
  // const cars = yield call(getCarsLarge, action);
  const cars = yield call(getPagingCarsLarge, action);
  yield put({
    type: REDUCER_GET_CARS_LIST,
    payload: cars,
  });
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SAGA_GET_CARS_LIST, sagaGetCarsList);
}
