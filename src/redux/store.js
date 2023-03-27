import { configureStore } from "@reduxjs/toolkit";
import userPreferencesReducer from "./user-preferences/user-preferences.reducer";
import logger from "redux-logger";
import userReducer from "./user/user.reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import persistStore from "redux-persist/es/persistStore";
import accountReducer from "./account/account.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        userPreferences: userPreferencesReducer,
        user: userReducer,
        account: accountReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat([logger, sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
