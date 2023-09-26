import {
  Button,
  Divider,
  Grid,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    navigate('/checkout/payment');
  };

  return (
    <Grid container style={{ marginTop: '5rem' }}>
      <Grid item xs={12} sm={8} sx={{ padding: '1rem' }}>
        <Typography variant="h4" sx={{ margin: '1rem 0rem' }}>
          Contact Information:
        </Typography>
        <Divider sx={{ margin: '1rem 0rem' }} />
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Full Name" name="name" />
            <input type="text" placeholder="E-Mail" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Zip Code" name="cp" />
            <input type="text" placeholder="Cellphone" name="phone" />
          </form>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        className="Information-sidebar"
        sx={{ padding: '1rem' }}
      >
        <Typography variant="h4" sx={{ margin: '1rem 0rem' }}>
          Order:
        </Typography>
        <Divider sx={{ margin: '1rem 0rem' }} />
        {cart.map((item) => (
          <>
            <ListItem>
              <ListItemText primary={item.title} />${item.price}
            </ListItem>
            <Divider />
          </>
        ))}
        <div className="Information-buttons">
          <Link to="/checkout">
            <Button variant="outlined" type="button" color="secondary">
              Back
            </Button>
          </Link>
          <Button
            variant="contained"
            type="button"
            onClick={handleSubmit}
            color="secondary"
          >
            Pay
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Information;
