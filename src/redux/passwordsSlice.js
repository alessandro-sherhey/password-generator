import { createSlice } from "@reduxjs/toolkit";

const passwordsSlice = createSlice({
    name: 'passwords',
    initialState: [],
    reducers: {
        generate: (state, action) => {state.push(...action.payload)}
    }
})

export const { generate } = passwordsSlice
export default passwordsSlice.reducer