import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Checkout = ({ cart, onCheckout }) => {
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  return (
    <div>
      <Typography variant="h4">Checkout</Typography>
      <TextField
        label="Name"
        name="name"
        value={customer.name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={customer.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={customer.phone}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onCheckout(customer)}
      >
        Complete Checkout
      </Button>
    </div>
  );
};

export default Checkout;
