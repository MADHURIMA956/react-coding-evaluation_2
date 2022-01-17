import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
    name:"job",
    initialState:{
        job:null
    },
    reducers:{
        addjob:(state,action) => {
            state.job = action.payload;
        },
        showjob:(state) => {
            state.job = null;
        },
    },
});

export const {addjob , showjob} = jobSlice.actions;

export const selectJob = (state) => state.job.job;

export default jobSlice.reducer