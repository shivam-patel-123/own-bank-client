import { all, fork } from "redux-saga/effects";
import accountSaga from "./account/account.saga";
import userSagas from "./user/user.sagas";

export default function* rootSaga() {
    yield all([fork(accountSaga), fork(userSagas)]);
}
