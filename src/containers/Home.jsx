import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import initialState from '../initialState';

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
