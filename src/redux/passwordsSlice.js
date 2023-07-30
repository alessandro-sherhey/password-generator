import { createSlice } from "@reduxjs/toolkit";

const passwordsSlice = createSlice({
    name: 'passwords',
    initialState: [],
    reducers: {
        add: (state, action) => action.payload
    }
})

export const { add } = passwordsSlice.actions;
export default passwordsSlice.reducer