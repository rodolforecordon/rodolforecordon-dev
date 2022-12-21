import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledThemeProvider } from './styles/styled-theme-provider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledThemeProvider>
      <App />
    </StyledThemeProvider>
  </React.StrictMode>
);
