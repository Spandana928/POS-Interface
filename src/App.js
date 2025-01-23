import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import POS from './pages/POS';
import './App.css';


const theme = createTheme({
  typography: {
    fontSize: 14,
    h3: {
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h4: {
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
  },
});

const App = () => {
  return (
    <>
     <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pos" element={<POS />} />
      </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;


