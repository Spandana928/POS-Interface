import React from 'react';
import './ServiceList.css'; // Ensure this CSS file exists

const ServiceList = ({ services, onAddToCart, currency }) => {
  // Function to convert price based on selected currency
  const convertPrice = (price) => {
    if (currency === 'EUR') return (price * 0.85).toFixed(2); // Example: USD to EUR conversion
    if (currency === 'INR') return (price * 74).toFixed(2);  // Example: USD to INR conversion
    return price.toFixed(2); // Default to USD
  };

  return (
    <div className="service-list">
      {services.map((service) => (
        <div key={service.id} className="service-item">
          <div>
            <span className="service-name">{service.name} <span> - </span></span>
            <span className="service-price">
              {convertPrice(service.price)} {currency}
            </span>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={() => onAddToCart(service)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;

