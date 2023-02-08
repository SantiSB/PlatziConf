import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import AppContext from '../context/AppContext';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
      <AppBar color='secondary'>
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                PET SHOP
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Link to="/checkout" style={{display: 'flex', gap: '0.5rem'}}>
                  <ShoppingBasketIcon style={{'color':'#ffffff'}}/>
                  {cart.length > 0 && <Typography style={{'color':'#ffffff'}}>{cart.length}</Typography>}
                </Link>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

  );
};

export default Header;
