import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5 mt-4" style={{marginBottom:"5rem"}}>
        <h1 className="mt-3" style={{fontSize:"50px" , fontWeight:"600"}}>Charges</h1>
        <p className="mb-5 fs-4 text-muted">List of all charges and taxes</p>
      </div>

        <div className="row pb-5" style={{marginBottom:'80px'}}>
    
    <div className="col-4 text-center mt-2">
        <img src="media/images/0.svg" style={{width:"70%"}}/>
        <h3 className="fs-2">Free equity delivery</h3>
        <p className="text-muted" style={{fontSize:"17px"}}>
        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
        </p>
    </div>
    <div className="col-4 text-center mt-2">
        <img src="media/images/20.svg" style={{width:"70%"}}/>
        <h3 className="fs-2">Free equity delivery</h3>
        <p className="text-muted" style={{fontSize:"17px"}}>
        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
        </p>
    </div>
    <div className="col-4 text-center mt-2">
        <img src="media/images/0.svg" style={{width:"70%"}}/>
        <h3 className="fs-2">Free equity delivery</h3>
        <p className="text-muted" style={{fontSize:"17px"}}>
        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
        </p>
    </div>

   
    
  
        </div>






    </div>
  );
}

export default Hero;
