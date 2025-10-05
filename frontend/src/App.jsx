import './App.css';
import Auth from './Pages/Auth';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Landing from './Pages/landing';
import Posts from './Pages/post';
import Form from './Pages/form';
import {BrowserRouter as Router, Routes , Route , Navigate } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Routes caseSensitive={true}>
        <Route path="/" element={<Navigate to="/Auth" replace={true}/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Auth" element={<Auth/>}/>
        <Route path="/Home" element={<Landing/>} />
        <Route path="/posts" element={< Posts />} />
        <Route path="/form" element={< Form />} />
      </Routes>
    </Router>
  )
}

export default App;
