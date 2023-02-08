import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    theme: "light",
};

const userPreferencesSlice = createSlice({
    name: "userPreferences",
    initialState: INITIAL_STATE,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
});

export const { toggleTheme } = userPreferencesSlice.actions;

export default userPreferencesSlice.reducer;
