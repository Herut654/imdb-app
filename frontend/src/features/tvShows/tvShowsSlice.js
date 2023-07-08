
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTvShows = createAsyncThunk(
  "getMovies",
  async (rejectWithValue) => {
    try {
      const { data } = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=2ba980c37a27e29473fa9c40ff993e98&language=en-US");
      return data.results;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvShows: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getTvShows.pending]: (state, action) => {
      state.loading = true;
    },
    [getTvShows.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.movies = payload;
    },
    [getTvShows.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export default tvShowsSlice.reducer;
