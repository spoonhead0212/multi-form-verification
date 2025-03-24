import { configureStore } from "@reduxjs/toolkit";
import addonReducer from "../../AllSlices/addonSlice/addonSlice"
import planReducer from "../../AllSlices/planSlice/planSlice"

export const store = configureStore({
    reducer: {
        plans: planReducer,
        addons: addonReducer,
    }
})