import { useEffect, useState } from 'react';
import initialState from '../initialState';
import axios from 'axios';

// const API = 'http://localhost:1337/api/products?populate=%2A';
// const API2 = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

const useInitialState = () => {
    //Estado
const [state, setState] = useState(initialState);

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function loadProducts(){
  //     const response = await axios(API)
  //     setProducts(response.data.data)
  //   }
  //   loadProducts()
  // }, [])

  //Función para agregar al carrito
  const addToCart = payload => {
    //Actualiza el state.cart con la misma información que tenia sumandole el payload o lo nuevo que se agrega al carrito
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  }

  //Función para remover del carrito
  const removeFromCart = payload => {
    // Filtra los items del carrito que tengan un ID diferente al payload (Elimina el que coincida con el ID)
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  };

    //Función para agregar un comprador
    const addToBuyer = payload => {
      //Actualiza el state.cart con la misma información que tenia sumandole el payload o lo nuevo que se agrega al carrito
      setState({
        ...state,
        buyer: [...state.buyer, payload],
      });
    }

    //Función para agregar una nueva orden
    const addNewOrder = payload => {
      setState({
        ...state,
        orders: [...state.orders, payload]
      })
    }

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    products,
    state,
    
  };
};

export default useInitialState;