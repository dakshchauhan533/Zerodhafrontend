import React from "react";

function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-center mt-5 mb-5 pb-5">
        <div className="col">
          <p className="fs-5 text-muted" style={{ fontWeight: "500" }}>
            Want to know more about our technology stack? Check out the{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Zerodha.tech
            </a>{" "}
            blog.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <h1 className="mb-4 fs-2">The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <div className="row text-center mt-5 ">
        <div className="col-4 mb-5">
          <img src="media/images/zerodhaFundhouse.png"  className="w-50 mb-3"/>
          <p className="text-small text-muted" style={{paddingTop:"16px"}} >Our asset managemment venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4 mb-5">
          <img src="media/images/sensibullLogo.svg"  className="w-50 mb-4 mt-3" />
          <p className="text-small text-muted" style={{paddingTop:"12px"}}>Option trading platform that lets you create strategies , analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 mb-5">
          <img src="media/images/tijori.svg"  className="w-50 mb-3"/>
          <p className="text-small text-muted">investment research platform that offers detailed insights on stocks,sectors,supply chains,and more.</p>
        </div>
      </div>
      <div className="row text-center mt-5">
        <div className="col-4 mb-5">
          <img src="media/images/streakLogo.png" className="w-50 mb-4" />
          <p className="text-small text-muted" style={{paddingTop:"10px"}}>Systemantic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className="col-4 mb-5">
          <img src="media/images/smallcaseLogo.png"  className="w-50 mb-5"/>
          <p className="text-small text-muted"> Thematic investing platform that helps you invest in diversified baskets on stocks on ETFs.</p>
        </div>
        <div className="col-4 mb-5">
          <img src="media/images/dittoLogo.png" className="w-50 mb-4" />
          <p className="text-small text-muted" style={{paddingTop:"6px"}}>Personalized advise on life and health insurance. no-spam and no mis-selling.</p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
