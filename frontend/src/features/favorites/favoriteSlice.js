import { createSlice } from '@reduxjs/toolkit'
const LOCAL_STORAGE_KEY = "favorites";

const initialState = {
    favorites: localStorage.getItem(LOCAL_STORAGE_KEY) !== null
        ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        : [],
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const storageFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
            state.favorites = storageFavorites
            const existingItem = state.favorites.find((item) => item.id === action.payload.id);
            if (!existingItem) {
                state.favorites.push(action.payload);
                let favoritesArrey = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
                favoritesArrey.push(action.payload);
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoritesArrey));
            }
        },
        removeFavorite: (state, action) => {
            const storageFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
            state.favorites = storageFavorites
            state.favorites.map((favorite) => {
                if (favorite.id === action.payload.id) {
                    const nextFavorite = state.favorites.filter(
                        (favorite) => favorite.id !== action.payload.id
                    );
                    state.favorites = nextFavorite
                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextFavorite));
                }
            });
        },
    },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer