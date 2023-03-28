import { put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { GET_LINES, SET_LINES, LOADING, DONE_LOADING } from "../constants";

function* fetchLinesInfo(action: { type: string; team: string; year: number }) {
  yield put({ type: LOADING });
  try {
    // @ts-ignore
    const res = yield axios.get(`/api/v1/lines/2021`);
    yield put({ type: SET_LINES, lines: res.data });
  } catch (error) {
    console.log(error);
  }
  yield put({ type: DONE_LOADING });
}

function* watchFetchProducts() {
  yield takeEvery(GET_LINES, fetchLinesInfo);
}

export default function* teamRootSaga() {
  yield all([watchFetchProducts()]);
  // code after all-effect
}
