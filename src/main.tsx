import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';
import { App } from './App';

// Garantir que o elemento root não é nulo
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Elemento com ID 'root' não encontrado.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
