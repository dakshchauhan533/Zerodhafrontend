// filepath: /c:/Users/chauh/Desktop/projects/Zerodha/frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './landing_page/home/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import Aboutpage from "./landing_page/about/Aboutpage";
import Pricingpage from "./landing_page/pricing/Pricingpage";
import Productpage from "./landing_page/product/Productpage";
import Supportpage from "./landing_page/support/Supportpage";
import Navbar from "./landing_page/Navbar/Navbar";
import Footer from "./landing_page/Footer/Footer";
import Notfound from "./landing_page/Notfound/Notfound";
import "react-toastify/dist/ReactToastify.css";
import Login from "./landing_page/Login/Login";
import { AuthProvider } from './context/AuthContext';
import DashboardWrapper from './DashboardWrapper';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/pricing' element={<Pricingpage />} />
        <Route path='/products' element={<Productpage />} />
        <Route path='/support' element={<Supportpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard/*' element={<DashboardWrapper/>} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  </BrowserRouter>
);