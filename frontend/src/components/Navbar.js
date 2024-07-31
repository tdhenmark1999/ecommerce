import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Badge, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button color="inherit" onClick={() => navigate('/')}>
            <Typography variant="h6">E-commerce Site</Typography>
          </Button>
          <IconButton color="inherit" onClick={() => navigate('/cart')}>
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
