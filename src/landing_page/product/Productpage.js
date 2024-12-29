import React from "react";

import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Universe from "./Universe";

function Productpage() {
  return (
    <>
      <Hero />
      <Leftsection
        productname="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        imagelink="media/images/kite.png"
      />
      <Rightsection
        productname="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        imagelink="media/images/console.png"
        bottomlink="learn more→"
      />
      <Leftsection
        productname="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        imagelink="media/images/coin.png"
      />
      <Rightsection
        productname="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        imagelink="media/images/kiteconnect.png"
        bottomlink="Kite Connect→"
      />
      <Leftsection
        productname="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        imagelink="media/images/varsity.png"
      />
    
      <Universe />
    </>
  );
}

export default Productpage;
