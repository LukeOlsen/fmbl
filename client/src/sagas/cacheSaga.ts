import { put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { LOAD_CACHE, LOADING, DONE_LOADING, SET_CACHE } from "../constants";

function* loadCache(action: { type: string }) {
  yield put({ type: LOADING });
  try {
    const res = yield axios.get(`/api/cache`);
    console.log(res.data);
    yield put({ type: SET_CACHE, cache: res.data });
  } catch (error) {
    console.log(error);
  }
  yield put({ type: DONE_LOADING });
}

function* watchFetchProducts() {
  yield takeEvery(LOAD_CACHE, loadCache);
}

export default function* teamRootSaga() {
  yield all([watchFetchProducts()]);
  // code after all-effect
}
