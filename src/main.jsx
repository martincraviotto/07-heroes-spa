import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles.css'
import { HerosApp } from './HerosApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>    
      <HerosApp />
    </BrowserRouter>
  </StrictMode>,
)
