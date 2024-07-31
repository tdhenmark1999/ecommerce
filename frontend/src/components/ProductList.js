import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, CardActions, CardMedia, Button, Typography } from '@mui/material';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map(product => (
        <Card key={product.id} style={{ margin: '20px', width: '300px' }}>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="body2">{formatPrice(product.price)}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
