import { createSlice } from "@reduxjs/toolkit"

// Define the type for themeMode as 'light' | 'dark'
interface ThemeState {
    themeMode: 'light' | 'dark';
}

const initialState: ThemeState = {
    themeMode: 'dark' // This remains either 'dark' or 'light'
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.themeMode = state.themeMode === 'dark' ? 'light' : 'dark'
        }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
