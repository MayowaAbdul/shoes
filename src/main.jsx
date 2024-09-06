import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import './index.css';
import Navbar from './navbar';
import Home from './home';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />

  </React.StrictMode>
)
