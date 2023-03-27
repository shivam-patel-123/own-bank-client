import { call, all, fork, put, takeLatest } from "redux-saga/effects";
import { fetchAllAccounts } from "../../utils/api/accounts";
import { fetchAllAccountsStart, fetchAllAccountsSuccess } from "./account.reducer";

function* handleFetchAllAccount() {
    try {
        console.log("HELLO");
        const { data: response } = yield call(fetchAllAccounts);
        console.log(response);
        yield put(fetchAllAccountsSuccess(response.data.accounts));
    } catch (err) {
        console.log(err);
    }
}

function* watchFetchAllAccountSaga() {
    yield takeLatest(fetchAllAccountsStart().type, handleFetchAllAccount);
}

export default function* accountSaga() {
    yield all([fork(watchFetchAllAccountSaga)]);
}
