import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    account: null,
    linkedAccounts: [],
    error: "",
    approveRequests: [],
    parentAccount: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginInStart(state) {
            state.loading = true;
        },
        loginSuccess(state, { payload }) {
            const account = { ...payload, linkedAccounts: undefined };
            state.account = account;
            state.linkedAccounts = payload.linkedAccounts;
            state.error = "";
            state.loading = false;
        },
        loginFailure(state, { payload }) {
            state.error = payload;
            state.account = null;
            state.loading = false;
        },
        signUpStart(state) {
            state.loading = true;
        },
        getApproveRequestStart(state) {
            state.loading = true;
        },
        getApproveRequestSuccess(state, { payload }) {
            state.loading = false;
            state.error = "";
            state.approveRequests = payload;
        },
        getApproveRequestFailure(state, { payload }) {
            state.loading = false;
            state.error = payload;
            state.approveRequests = [];
        },
        approveRequestStart(state) {
            state.loading = true;
        },
        approveRequestSuccess(state, { payload }) {
            state.loading = false;
            state.error = "";
            state.approveRequests = state.approveRequests.filter(({ accountNumber }) => accountNumber !== payload.accountNumber);
        },
        approveRequestFailure(state, { payload }) {
            state.loading = false;
            state.error = payload;
        },
        logoutStart(state) {
            state.loading = true;
        },
        logoutSuccess(state) {
            state.loading = false;
            state.error = "";
            state.account = null;
            state.linkedAccounts = [];
        },
        updateProfilePictureStart(state) {
            state.loading = true;
        },
        switchAccountStart(state) {
            state.loading = true;
        },
        switchAccountSuccess(state, { payload }) {
            state.loading = false;
            state.parentAccount = !state.parentAccount ? state.account : state.parentAccount;
            state.account = payload;
            state.error = "";
        },
        switchAccountFailure(state, { payload }) {
            state.loading = false;
            state.account = null;
            state.error = payload;
        },
    },
});

export const {
    loginInStart,
    loginSuccess,
    loginFailure,
    signUpStart,
    getApproveRequestStart,
    getApproveRequestSuccess,
    getApproveRequestFailure,
    approveRequestStart,
    approveRequestSuccess,
    approveRequestFailure,
    logoutStart,
    logoutSuccess,
    updateProfilePictureStart,
    switchAccountStart,
    switchAccountSuccess,
    switchAccountFailure,
} = userSlice.actions;

export default userSlice.reducer;
