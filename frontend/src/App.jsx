import './App.css';
import Auth from './Pages/Auth';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import {BrowserRouter as Router, Routes , Route , Navigate } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Routes caseSensitive={true}>
        <Route path="/" element={<Navigate to="/Auth" replace={true}/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Auth" element={<Auth/>}/>
      </Routes>
    </Router>
  )
}

export default App;
