import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <Card sx={{ margin: 1 }}>
        <CardMedia
          component="img"
          height="230"
          image={`${product.image}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant='outlined' onClick={handleAddToCart(product)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default Product; 