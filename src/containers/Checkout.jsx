import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';
import { Button, Divider, Grid, IconButton, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <Grid container style={{ marginTop: '5rem' }}>
      <Grid item xs={12}>
        {cart.length > 0 ? <Typography variant='h3'>Pets List:</Typography> : <Typography variant='h3'>Without Pets...</Typography>}
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} sm={8} >
            <List>
              {cart.map((item) => (
                <>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={handleRemove(item)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={item.title}
                  />
                  {item.price}
                </ListItem>
                <Divider/>
                </>
              ))}
            </List>
          </Grid>
          {cart.length > 0 && (
            <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                <Typography variant='h5' sx={{ margin: '1rem' }}>{`Total Price: $ ${handleSumTotal()}`}</Typography >
                <Link to="/checkout/information">
                  <Button variant='contained' color='secondary'>Continue order</Button>
                </Link>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>

  );
}

export default Checkout;