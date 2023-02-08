import { configureStore } from "@reduxjs/toolkit";
import userPreferencesReducer from "./user-preferences/user-preferences.reducer";

const store = configureStore({
    reducer: {
        userPreferences: userPreferencesReducer,
    },
});

export default store;
