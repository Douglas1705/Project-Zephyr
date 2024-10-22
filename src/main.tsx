import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Teste from './components/specific/Teste';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Teste />
  </StrictMode>,
);
