
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk(
  "getMovies",
  async (rejectWithValue) => {
    try {
      const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=2ba980c37a27e29473fa9c40ff993e98&language=en-US");
      return data.results;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.movies = payload;
    },
    [getMovies.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export default moviesSlice.reducer;
