import { slice } from "./Slice/AdminSlice"
import { configureStore } from "@reduxjs/toolkit"


export const str = configureStore({
    reducer: {
        frontend: slice,
    },
});
