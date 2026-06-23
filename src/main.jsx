import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Login } from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyles />
  </StrictMode>,
);
