import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
  const navigate = useNavigate()
  //Traemos nuestro contexto
  const { state, addNewOrder } = useContext(AppContext);
  //Traemos el estado de cart y buyer de nuestro contexto
  const { cart, buyer } = state;

  //Configuramos las opciones de paypal para el boton
  const paypalOtions = {
    clientId:
      'AUs0-lsTJUsr3K3A9oPVEpUIvr6v99RmRrIOyaicvnrguKHdJE2AOl-lCqfApGC1sSI2GXIPWnYZCaWN',
    intent: 'capture',
    currency: 'USD',
  };

  //Estilos del boton
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  //Función que agrega una nueva orden
  const handlePaymentSuccess = (data) => {
    //Si el estado es completado
    if (data.status === 'COMPLETED') {
      //Creamos nueva orden
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      // history.push('/checkout/success');
      navigate('/checkout/success')
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {/* Mapeamos el carrito y mostramos los elementos */}
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
