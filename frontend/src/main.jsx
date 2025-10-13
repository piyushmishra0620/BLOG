import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BlogProvider } from './Contexts/blogContext.jsx';
import { AuthProvider } from './Contexts/authContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENTID}>
        <BlogProvider>
          <App />
        </BlogProvider>
      </GoogleOAuthProvider>
    </AuthProvider>
  </StrictMode>,
)
