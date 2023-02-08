import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';
import { Divider, ListItem, ListItemText } from '@mui/material';

const Payment = () => {
  const navigate = useNavigate()
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      'AUs0-lsTJUsr3K3A9oPVEpUIvr6v99RmRrIOyaicvnrguKHdJE2AOl-lCqfApGC1sSI2GXIPWnYZCaWN',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);
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
        <h3>Resume Order:</h3>
        {cart.map((item) => (
          <>
            <ListItem>
              <ListItemText
                primary={item.title}
              />
              $ {item.price}
            </ListItem>
            <Divider />
          </>
        ))}
        <div className="Payment-button">

          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
