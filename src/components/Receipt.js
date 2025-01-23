import React from 'react';

const Receipt = ({ receipt, currency }) => {
  const convertPrice = (price) => {
    if (currency === 'USD') return price;
    if (currency === 'EUR') return price * 0.85; // Example conversion
    if (currency === 'INR') return price * 74; // Example conversion
    return price;
  };

  return (
    <div>
      <h3>Receipt</h3>
      <p>Customer: {receipt.customerDetails.name}</p>
      <ul>
        {receipt.cart.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span> - </span>

            <span>
              {convertPrice(item.price).toFixed(2)} {currency}
            </span>
          </li>
        ))}
      </ul>
      <p>Total: {convertPrice(receipt.total).toFixed(2)} {currency}</p>
    </div>
  );
};

export default Receipt;


