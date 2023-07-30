import { configureStore } from "@reduxjs/toolkit";
import passwordsReducer from "./passwordsSlice";
import optionsReducer from "./optionsSlice";
import settingsReducer from "./settingsSlice"

const store = configureStore({
    reducer: {
        passwords: passwordsReducer,
        options: optionsReducer,
        settings: settingsReducer
    }
})

export default store