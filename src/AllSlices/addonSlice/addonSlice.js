import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedAddons: {}
}

export const addonSlice = createSlice({
    name: 'addons',
    initialState,
    reducers: {
        addAddons: (state, action) => {
            state.selectedAddons = action.payload
        }
    }
})

export const selectedAddons = (state) => state.addons.selectedAddons
export const {addAddons} = addonSlice.actions
export default addonSlice.reducer