import { createSlice } from "@reduxjs/toolkit";

const passwordsSlice = createSlice({
    name: 'passwords',
    initialState: [],
    reducers: {
        generate: (state, action) => {
            state = [];
            state.push(...action.payload)
        }
    }
})

export const { generate } = passwordsSlice.actions;
export default passwordsSlice.reducer