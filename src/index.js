import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId="1042426226506-vbl6p3jqvmdtc4nu52bddlioe29q4clb.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
);

