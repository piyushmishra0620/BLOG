import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BlogProvider } from './Contexts/blogContext.jsx';
import { AuthProvider } from './Contexts/authContext.jsx';
import { GoogleOauthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <GoogleOauthProvider clientId={import.meta.env.VITE_clientId}>
        <BlogProvider>
          <App />
        </BlogProvider>
      </GoogleOauthProvider>
    </AuthProvider>
  </StrictMode>,
)
