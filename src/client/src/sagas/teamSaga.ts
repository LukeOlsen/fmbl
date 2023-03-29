import { put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { GET_TEAM, SET_TEAM, LOADING, DONE_LOADING } from "../constants";

function* fetchTeamInfo(action: { type: string; team: string; year: number }) {
  yield put({ type: LOADING });
  try {
    // @ts-ignore
    const res = yield axios.get(
      `/api/v1/teams/${action.team}?year=${action.year}`
    );
    yield put({ type: SET_TEAM, team: res.data[0] });
  } catch (error) {
    console.log(error);
  }
  yield put({ type: DONE_LOADING });
}

function* watchFetchProducts() {
  yield takeEvery(GET_TEAM, fetchTeamInfo);
}

export default function* teamRootSaga() {
  yield all([watchFetchProducts()]);
  // code after all-effect
}
