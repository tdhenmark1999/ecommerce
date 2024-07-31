import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    axios.post('http://localhost:3001/checkout', { name, email, cart })
      .then(response => {
        alert('Order placed successfully');
        dispatch({ type: 'CHECKOUT' });
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error placing the order!', error);
      });
  };

  return (
    <Box>
      <Typography variant="h4">Checkout</Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleCheckout}>Checkout</Button>
    </Box>
  );
};

export default Checkout;
