import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './landing_page/home/Homepage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import Aboutpage from "./landing_page/about/Aboutpage";
import Pricingpage from "./landing_page/pricing/Pricingpage";
import Productpage from "./landing_page/product/Productpage";
import Supportpage from "./landing_page/support/Supportpage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Notfound from "./landing_page/Notfound"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/About' element={<Aboutpage/>}/>
      <Route path='/Pricing' element={<Pricingpage/>}/>
      <Route path='/products' element={<Productpage/>}/>
      <Route path='/support' element={<Supportpage/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    
<Footer/>
  </BrowserRouter>
);


