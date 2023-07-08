import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const register = window.location.toString().includes("register")
  const login = window.location.toString().includes("login")

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {user ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="Dashboard"
                href='/dashboard'
              >
                <LiveTvIcon />
              </IconButton>
              <Box sx={{ display: { xs: 'none', md: 'flex', flexGrow: 1 } }}>
                <Button color="inherit" href='/movies'>Movies</Button>
                <Button color="inherit" href='/TvShows'>TV's</Button>
                <Button color="inherit" href='/favorites'>Favorites</Button>
              </Box>
            </>
          ) : (
            <Box sx={{ display: { xs: 'none', md: 'flex', flexGrow: 1 } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="Dashboard"
                href='/login'
              >
                <LiveTvIcon />
              </IconButton>
            </Box>
          )}
          {user ? (
            <>
              <Typography variant='p' sx={{ mr: 2.25 }}>Welcome {user && user.name}</Typography>
              <Button color="inherit" onClick={onLogout}><FaSignOutAlt /> Logout</Button>
            </>
          ) : (
            <>
              {register ?(<Button color="inherit" href='/login'><FaSignInAlt />Login</Button>) : (<></>) }
              {login ?(<Button color="inherit" href='/register'><FaUser />Register</Button>) : (<></>) }
              
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
