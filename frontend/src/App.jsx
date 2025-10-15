import './App.css';
import Auth from './Pages/Auth';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Landing from './Pages/landing';
import Posts from './Pages/post';
import Form from './Pages/form';
import Blog from './Pages/blog';
import ProtectedRoute from  './Components/protectedRoute';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes caseSensitive={true}>
          <Route path="/" element={<Navigate to="/Auth" replace={true} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Home" element={<ProtectedRoute><Landing/></ProtectedRoute>} />
          <Route path="/posts" element={<ProtectedRoute><Posts/></ProtectedRoute>} />
          <Route path="/posts/:slug" element={<ProtectedRoute><Blog/></ProtectedRoute>} />
          <Route path="/form" element={<ProtectedRoute><Form/></ProtectedRoute>} />
        </Routes>
      </Router>
  );
};

export default App;
