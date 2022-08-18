import React from 'react';
import Product from './Product';
import '../styles/components/Products.css';

const Products = ({ products }) => {
  return (
    <div className="Products">
      <div className="Products-items">
        {/* Mapeamos los productos */}
        {products.map(product => (
            //Por cada producto renderizamos un componente product al que se le pasa por parametro el producto y una key
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;