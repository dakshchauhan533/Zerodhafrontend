import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Universe from "./Universe";


function Productpage() {
    return ( <>
    <Navbar/>
    <Hero/>
    <Leftsection/>
    <Rightsection/>
    <Universe/>
    <Footer/>
    </> );
}

export default Productpage;