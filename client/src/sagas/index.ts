// // import any sagas from other files as import * as sagaFileName from {filename}
import { all } from "redux-saga/effects";
import testRootSaga from "./testSagas";

export default function* rootSaga() {
  yield all([testRootSaga()]);
}
