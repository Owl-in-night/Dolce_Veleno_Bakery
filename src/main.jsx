import {createRoot} from 'react-dom/client';
import './index.css'
import React from 'react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
)
