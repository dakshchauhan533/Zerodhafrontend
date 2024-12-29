import React from "react";

function Pricing() {
  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mx-4">Unbeatable pricing</h1>
          <p className="mt-5 mx-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }} className="mx-4">
            See pricing<i class="fa-solid fa-arrow-right "></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col mt-3">
              <img src="media/images/pricing-eq.svg" style={{ width: "50%" }} alt="img" />
             <p>Free a/c opening</p>
            </div>
            <div className="col mt-3">
             
              <img src="media/images/pricing-eq.svg" style={{ width: "50%" }}  alt="img"/>
              <p>Free equity delivery
              and direct mutual funds</p>
            </div>
            <div className="col mt-3">
             
              <img src="media/images/other-trades.svg" style={{ width: "50%" }} alt="img" />
              <p>Intraday and
              F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
