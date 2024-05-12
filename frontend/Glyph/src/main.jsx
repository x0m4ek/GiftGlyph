import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ThemeProvider, createTheme } from '@mui/material';
import { AuthProvider } from './context/AuthContext.jsx';
import { colors } from './utils/config.js';

const theme = createTheme({
  typography: {
    fontFamily: [
      // '"Kumbh Sans", sans-serif',
    
    ].join(','),
  },
  palette: {
    primary: {
      main: `${colors.primary}`,
    },
    secondary: {
      main: `${colors.secondary}`,
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
  </AuthProvider>
)
