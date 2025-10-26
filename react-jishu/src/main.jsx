import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import "primereact/resources/themes/arya-orange/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

import { PrimeReactProvider } from 'primereact/api';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </BrowserRouter>
);