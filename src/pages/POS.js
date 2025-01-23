import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import the hook for i18n
import ServiceList from '../components/ServiceList';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import Receipt from '../components/Receipt';

const POS = () => {
  const { t, i18n } = useTranslation(); // Access translation function

  // State management
  const [cart, setCart] = useState([]); // Ensure cart is an empty array by default
  const [receipt, setReceipt] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState('USD'); // Default currency is USD

  // Service list with name and price (could be extended or fetched from an API)
  const services = [
    { id: 1, name: 'Fitness Class', price: 20 },
    { id: 2, name: 'Therapy Session', price: 50 },
    { id: 3, name: 'Workshop', price: 30 },
    { id: 4, name: 'Meditation Class', price: 15 },
    { id: 5, name: 'Yoga Session', price: 25 },
  ];

  // Filter services based on search query
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Convert prices based on selected currency
  const convertPrice = (price) => {
    if (currency === 'USD') return price;
    if (currency === 'EUR') return price * 0.85; // Example conversion
    if (currency === 'INR') return price * 74; // Example conversion
    return price;
  };

  // Add service to cart
  const handleAddToCart = (service) => {
    setCart([...cart, { ...service, convertedPrice: convertPrice(service.price) }]);
  };

  // Remove service from cart
  const handleRemoveFromCart = (serviceId) => {
    setCart(cart.filter(item => item.id !== serviceId)); // Remove item based on id
  };

  // Handle checkout and generate receipt
  const handleCheckout = (customerDetails) => {
    const total = cart.reduce((acc, item) => acc + (item.convertedPrice || item.price), 0);
    setReceipt({ customerDetails, cart, total });
    setCart([]); // Clear cart after checkout
  };

  // Handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language dynamically
  };

  // Handle currency change
  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
  };

  useEffect(() => {
    // Recalculate cart prices when currency changes
    const updatedCart = cart.map(item => ({
      ...item,
      convertedPrice: convertPrice(item.price),
    }));
    setCart(updatedCart);
  }, [currency]); // Dependency on currency change

  return (
    <div>
      {/* Language switcher */}
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
      </div>

      {/* Currency switcher */}
      <div>
        <button onClick={() => changeCurrency('USD')}>USD</button>
        <button onClick={() => changeCurrency('EUR')}>EUR</button>
        <button onClick={() => changeCurrency('INR')}>INR</button>
      </div>

      {/* Search functionality */}
      <input
        type="text"
        placeholder={t('search')} // Use translation for search placeholder
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Service List, Cart, Checkout, and Receipt sections */
      /* Service List, Cart, Checkout, and Receipt sections */}
{!receipt ? (
  <>
    <h2>{t('availableServices')}</h2>
    <ServiceList 
      services={filteredServices} 
      onAddToCart={handleAddToCart} 
      currency={currency} // Pass currency to ServiceList
    />
    <Cart 
      cart={cart} 
      onRemoveFromCart={handleRemoveFromCart} // Pass remove function
    />
    <Checkout cart={cart} onCheckout={handleCheckout} />
  </>
) : (
  <Receipt receipt={receipt} currency={currency} /> // Pass currency to Receipt
)}

    </div>
  );
};

export default POS;
