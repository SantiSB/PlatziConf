import React from 'react';
import Products from '../components/Products';
import initialState from '../initialState';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Pet Shop - Products</title>
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
};

export default Home;
