import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import passwordsReducer from "./passwordsSlice";
import optionsReducer from "./optionsSlice";
import settingsReducer from "./settingsSlice";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    passwords: passwordsReducer,
    options: optionsReducer,
    settings: settingsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

const persistor = persistStore(store);

export { store, persistor }