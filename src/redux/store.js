import { configureStore } from "@reduxjs/toolkit";
import optionsReducer from "./optionsSlice";
import settingsReducer from "./settingsSlice"

const store = configureStore({
    reducer: {
        options: optionsReducer,
        settings: settingsReducer
    }
})

export default store