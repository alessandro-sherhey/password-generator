import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
    name: 'options',
    initialState: {
        general: {
            quantity: 1,
            length: 15
        },
        include: {
            uppercase: true,
            lowercase: true,
            numbers: true,
            symbols: true,
            separators: false
        }
    },
    reducers: {
        setQuantity: (state, action) => { state.general.quantity = action.payload },
        setLength: (state, action) => { state.general.length = action.payload },

        setUppercase: (state, action) => { state.include.uppercase = action.payload },
        setLowercase: (state, action) => { state.include.lowercase = action.payload },
        setNumbers: (state, action) => { state.include.numbers = action.payload },
        setSymbols: (state, action) => { state.include.symbols = action.payload },
        setSeparators: (state, action) => { state.include.separators = action.payload },
    }
})

export const { setQuantity, setLength, setUppercase, setLowercase, setNumbers, setSymbols, setSeparators } = optionsSlice.actions;
export default optionsSlice.reducer