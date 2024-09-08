import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from "@react-oauth/google"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GoogleOAuthProvider clientId='375666206498-8kgoqb71fmg7cruu0shttg9rkfi2topi.apps.googleusercontent.com' >
<React.StrictMode>
    <App />
  </React.StrictMode>
</GoogleOAuthProvider>
);


reportWebVitals();
