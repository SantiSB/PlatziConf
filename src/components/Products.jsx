import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

const Products = ({ products }) => {
  const { addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div style={{ marginTop: '5rem' }}>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product) => (
          <Grid xs={12} sm={4} key={product.id}>
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
