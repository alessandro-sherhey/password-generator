import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        language: 'english',
        sections: {
            include: true,
            exclude: false,
            strength: false
        }
    },
    reducers: {
        setLanguage: (state, action) => { state.language = action.payload },
        setIncludeSection: (state, action) => { state.sections.include = action.payload },
        setExcludeSection: (state, action) => { state.sections.exclude = action.payload },
        setStrengthSection: (state, action) => { state.sections.strength = action.payload }
    }
})

export const { setLanguage, setIncludeSection, setExcludeSection, setStrengthSection } = settingsSlice.actions;
export default settingsSlice.reducer;