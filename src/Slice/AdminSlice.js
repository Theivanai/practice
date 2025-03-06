import { createSlice } from "@reduxjs/toolkit"

const count = 0;
const AS = createSlice({
    name: "admin",
    initialState: count,
    reducers: {
        add(state, actions) {
            return state = state + actions.payload;
        },
        sub(state, actions) {
            return state = state - actions.payload;
        },
    }

})


export const { add, sub } = AS.actions;
export const slice = AS.reducer;