import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import moviesReducer from "../features/movies/moviesSlice";
import tvShowsReducer from "../features/tvShows/tvShowsSlice";
import favoriteReducer from "../features/favorites/favoriteSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    favorites: favoriteReducer
  },
})
