import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedPlan: {},
}

export const planSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {
        addPlan: (state, action) => {
            state.selectedPlan = action.payload
        },
        updatePlan: (state, action) => {
            state.selectedPlan = {...state.selectedPlan, ...action.payload}
        }
    }
})


// export const selectAllPlans = (state) => state.plans
export const {addPlan, updatePlan} = planSlice.actions
export const selectedPlan = (state) => state.plans.selectedPlan;
export default planSlice.reducer