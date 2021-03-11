import { put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { GET_TEAM, SET_TEAM } from "../constants/constants";

function* fetchTeamInfo(action: { type: string; team: string }) {
  try {
    const res = yield axios.get(`/api/team/${action.team}`);
    yield put({ type: SET_TEAM, team: res.data[0] });
  } catch (error) {}
}

function* watchFetchProducts() {
  yield takeEvery(GET_TEAM, fetchTeamInfo);
}

export default function* teamRootSaga() {
  yield all([watchFetchProducts()]);
  // code after all-effect
}
