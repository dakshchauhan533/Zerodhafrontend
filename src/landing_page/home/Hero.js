import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="heroimgae"  className="p-5"/>
    
      <h1 className="mt-5">Invest in Everything</h1>
      <p>
      Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </p>
      <button className="p-2 mt-4 mb-5 btn btn-primary fs-5" style={{margin:"0 auto" , width:"15%"}}>Signup now</button>
     </div>
    </div>
  );
}

export default Hero;
