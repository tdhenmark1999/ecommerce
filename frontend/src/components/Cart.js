import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography, Button, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Typography variant="h4">Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <List>
          {cart.map((item, index) => (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={`Price: ${formatPrice(item.price)} x${item.quantity} = ${formatPrice(item.price * item.quantity)}`}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
          <ListItem>
            <Typography variant="h6">Total: {formatPrice(getTotal())}</Typography>
          </ListItem>
        </List>
      )}
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/checkout')}
        disabled={cart.length === 0}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default Cart;
