import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
=======
import "primereact/resources/themes/arya-orange/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
>>>>>>> main


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // document.getElementById('root')
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
