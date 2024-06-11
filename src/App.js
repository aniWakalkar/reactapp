import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from './components/Navbar';
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <div className='container mx-auto p-4 bg-gray-100'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
