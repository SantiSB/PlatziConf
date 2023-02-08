import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';
import { Typography } from '@mui/material';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);

  return (
    <div className="Success">
      <div className="Success-content">
        <Typography variant='h3' color='secondary'>{`${buyer[0].name}, Thanks for your purchase`}</Typography>
        <span>Your order will arrive in3 days to your address:</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
}

export default Success;