import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations for English and Spanish
i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          cart: "Cart",
          total: "Total",
          checkout: "Checkout",
          availableServices: "Available Services",
          search: "Search services...",
          serviceAdded: "Service added to cart",
          name: "Name",
          email: "Email",
          phone: "Phone",
          completeCheckout: "Complete Checkout",
          receipt: "Receipt",
          customer: "Customer",
          servicePurchased: "Service Purchased",
        },
      },
      es: {
        translation: {
          cart: "Carrito",
          total: "Total",
          checkout: "Pagar",
          availableServices: "Servicios Disponibles",
          search: "Buscar servicios...",
          serviceAdded: "Servicio agregado al carrito",
          name: "Nombre",
          email: "Correo Electrónico",
          phone: "Teléfono",
          completeCheckout: "Completar Compra",
          receipt: "Recibo",
          customer: "Cliente",
          servicePurchased: "Servicio Comprado",
        },
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback to English if language is not available
    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
  });

export default i18n;
