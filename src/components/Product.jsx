import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`} alt={product.attributes.name} />
      <div className="Product-item-info">
        <h2>
        {product.attributes.title}
          <span>
            $
            {product.attributes.price}
          </span>
        </h2>
        <p>{product.attributes.description}</p>
      </div>
      {/* Invocamos la función de agregar al carrito y le pasamos el producto a agregar */}
      <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
    </div>
  );
}

export default Product; 