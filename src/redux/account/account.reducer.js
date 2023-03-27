import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accounts: [],
    loading: false,
    error: "",
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        fetchAllAccountsStart(state) {
            state.loading = true;
        },
        fetchAllAccountsSuccess(state, { payload }) {
            state.loading = false;
            state.accounts = payload;
            state.error = "";
        },
        fetchAllAccountsFailure(state, { payload }) {
            state.loading = false;
            state.accounts = [];
            state.error = payload;
        },
    },
});

export const { fetchAllAccountsFailure, fetchAllAccountsStart, fetchAllAccountsSuccess } = accountSlice.actions;

export default accountSlice.reducer;
