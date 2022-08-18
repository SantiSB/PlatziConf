import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
//Importamos AppContext (el contexto)
import AppContext from '../context/AppContext';

const Products = () => {
  //Conectamos el contexto, traemos el estado y la función addToCart
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;
  //Función que agrega al carrito
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {/* Mapeamos los productos */}
        {products.map((product) => (
          //Por cada producto renderizamos un componente product al que se le pasa por parametro el producto y una key
          //Le pasamos la función de agregar al carrito
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
