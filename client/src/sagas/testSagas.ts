import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";

function* helloSaga(): Generator {
  console.log("Hello Sagas!");
  return "Hello!";
}

function* fetchData(action: object) {
  try {
    const data = yield axios.get("/api/test");
    const returnInfo = data.data.myname;
    console.log(returnInfo);
    yield put({ type: "FETCH_SUCCEEDED", returnInfo });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

function* watchFetchProducts() {
  yield takeEvery("TRY_IT_OUT", fetchData);
}

export default function* testRootSaga() {
  yield all([helloSaga(), watchFetchProducts()]);
  // code after all-effect
}
