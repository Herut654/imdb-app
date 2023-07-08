import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themes } from './themes'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Movies from './pages/Movies';
import ErrorPage from './pages/ErrorPage';
import TvShows from './pages/TvShows';
import Favorites from './pages/Favorites';
const LOCAL_STORAGE_KEY = "favorites";

const App = () => {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme(themes(mode)), [mode]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storageFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageFavorites) {
      setFavorites(storageFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Router>
          <div className='container'>
            <Header />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/login' element={<Login />} />
              <Route path='/TvShows' element={<TvShows />} />
              <Route path='/Favorites' element={<Favorites />} />
              <Route path='/register' element={<Register />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App