import { AllExtensions } from "./data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allExtensions: AllExtensions, //This is for finding the targeted extension with a method. so it doesnt change
    extensions: AllExtensions, //this is the manipulated one that changes
}

export const extensionSlice = createSlice({
    name: 'extensionList',
    initialState,
    reducers: {
        showAllExtensions: (state) => {
            state.extensions = state.allExtensions    
        },
        activeExtensions: (state) => {
            const activeExt = state.allExtensions.filter(ex => ex.isActive === true)
            if (activeExt) {
                state.extensions = activeExt
            }
        },
        inactiveExtensions: (state) => {
            const inActiveExt = state.allExtensions.filter(ex => ex.isActive === false)
            if (inActiveExt) {
                state.extensions = inActiveExt
            }
        },
        toggleActive: (state, action) => {
            const toggleMe = state.allExtensions.find(ext => ext.id === action.payload);
            console.log(toggleMe, action.payload.index);
            if (toggleMe) {
                toggleMe.isActive = !toggleMe.isActive; // This is safe with Immer
            }

            // Also update visible list if needed
            const current = state.extensions.find(ext => ext.id === action.payload);
            if (current) {
                current.isActive = toggleMe?.isActive ?? current.isActive;
            }
        },
        removeExtension: (state, action) => {
            console.log(action.payload);
            const removeExtension = state.extensions.filter(ext => ext.id !== action.payload)

            if (removeExtension) {
                state.extensions = removeExtension
            }
        },
    }
})

export const {showAllExtensions, activeExtensions, inactiveExtensions, toggleActive, removeExtension} = extensionSlice.actions
export default extensionSlice.reducer