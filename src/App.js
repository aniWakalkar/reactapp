import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Build from './components/Build';
import Main from "./components/Main";
import Navbar from './components/Navbar';
import Preview from './components/Preview';
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
        <Route path="/preview" element={<Preview />} />
        <Route path="/build" element={<Build />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
