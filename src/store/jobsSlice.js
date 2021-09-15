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
    nameSearchText: "",
    selectedCompany: "",
    searchedData: [],
  },
  reducers: {
    setNameSearchText: {
      reducer: (state, action) => {
        state.nameSearchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || "" }),
    },
    setSelectedCompany: {
      reducer: (state, action) => {
        state.selectedCompany = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || "" }),
    },
    setSearchedData: {
      reducer: (state, action) => {
        state.searchedData = action.payload;
      },
    },
  },
  extraReducers: {
    [getJobs.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
  },
});
export const selectAllJobs = (state) => state.jobs.list;
export const { setNameSearchText, setSelectedCompany, setSearchedData } =
  jobsSlice.actions;
export default jobsSlice.reducer;
