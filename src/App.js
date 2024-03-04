import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Home from './Screens/Home';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Screens/Login';
import Signup from './Screens/Sign_up.js';
function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/createuser" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
