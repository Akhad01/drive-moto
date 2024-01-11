import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "grid"
}

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        toggleLayout: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { toggleLayout } = layoutSlice.actions

export default layoutSlice.reducer