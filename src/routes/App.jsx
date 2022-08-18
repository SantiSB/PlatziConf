import React from 'react';
//Importamos los elementos de react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Importamos los componentes de las rutas
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => {
  return (
    //Encapsulamos nuestras rutas
    <BrowserRouter>
        {/* Con el componente Layout podemos tener siempr el Header y el Footer */}
        <Layout>
        {/* Definimos cada ruta */}
        <Routes>
            {/* Ruta que representa el home */}
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/information" element={<Information />} />
            <Route path="/checkout/payment" element={<Payment />} />
            <Route path="/checkout/success" element={<Success />} />
            {/* Ruta que representa not found */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App