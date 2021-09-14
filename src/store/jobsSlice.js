import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getJobs = createAsyncThunk("jobs/getJobs", async () => {
  const response = await axios.get(
    `https://5f7335deb63868001615f557.mockapi.io/list`
  );
  const data = await response.data;

  return data;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    list: [],
  },
  extraReducers: {
    [getJobs.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export default jobsSlice.reducer;
