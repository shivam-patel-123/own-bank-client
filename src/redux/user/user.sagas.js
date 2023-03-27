import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
    approveRequestStart,
    approveRequestSuccess,
    getApproveRequestStart,
    getApproveRequestSuccess,
    loginFailure,
    loginInStart,
    loginSuccess,
    logoutStart,
    logoutSuccess,
    signUpStart,
    switchAccountStart,
    switchAccountSuccess,
    updateProfilePictureStart,
} from "./user.reducer";
import { approveRequest, getAccountApproveRequests, login, logout, signUp, switchAccount, updateProfilePicture } from "../../utils/api/accounts";

function* handleLogin({ payload: { email, password } }) {
    try {
        const { data: response } = yield call(login, {
            email,
            password,
        });
        yield put(loginSuccess(response.data.account));
    } catch (err) {
        yield put(loginFailure(err.response.data.message));
    }
}

function* handleSignUp({ payload: { accountNumber, accountName, email, password } }) {
    try {
        const { data: response } = yield call(signUp, {
            accountNumber,
            accountName,
            email,
            password,
        });
        yield put(loginSuccess(response.data.account));
    } catch (err) {
        yield put(loginFailure(err.response.data.message));
    }
}

function* handleGetApproveRequest() {
    try {
        const { data } = yield call(getAccountApproveRequests);
        console.log(data);
        yield put(getApproveRequestSuccess(data.data.accounts));
    } catch (err) {}
}

function* handleApproveRequest({ payload: { accountNumber } }) {
    try {
        const { data: response } = yield call(approveRequest, {
            accountNumber,
        });
        yield put(approveRequestSuccess(response.data.account.updatedAccount));
    } catch (err) {}
}

function* handleLogout() {
    try {
        yield call(logout);
        yield put(logoutSuccess());
    } catch (err) {}
}

function* handleUpdateProfilePicture({ payload }) {
    try {
        const { data: response } = yield call(updateProfilePicture, payload);
        yield put(loginSuccess(response.data.account));
    } catch (err) {
        console.log(err);
    }
}

function* handleSwitchAccount({ payload }) {
    try {
        const { data: response } = yield call(switchAccount, payload);
        console.log(response);
        yield put(switchAccountSuccess(response.data.account));
    } catch (err) {
        console.log(err);
    }
}

function* watchLoginSaga() {
    yield takeLatest(loginInStart().type, handleLogin);
}

function* watchSignUpSaga() {
    yield takeLatest(signUpStart().type, handleSignUp);
}

function* watchGetApproveRequestSaga() {
    yield takeLatest(getApproveRequestStart().type, handleGetApproveRequest);
}

function* watchApproveRequestSaga() {
    yield takeLatest(approveRequestStart().type, handleApproveRequest);
}

function* watchLogoutSaga() {
    yield takeLatest(logoutStart().type, handleLogout);
}

function* watchProfilePicUpdateSaga() {
    yield takeLatest(updateProfilePictureStart().type, handleUpdateProfilePicture);
}

function* watchSwitchAccountSaga() {
    yield takeLatest(switchAccountStart().type, handleSwitchAccount);
}

export default function* userSagas() {
    yield all([
        fork(watchLoginSaga),
        fork(watchSignUpSaga),
        fork(watchGetApproveRequestSaga),
        fork(watchApproveRequestSaga),
        fork(watchLogoutSaga),
        fork(watchProfilePicUpdateSaga),
        fork(watchSwitchAccountSaga),
    ]);
}
