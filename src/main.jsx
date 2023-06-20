import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import theme from "../src/utils/theme";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
