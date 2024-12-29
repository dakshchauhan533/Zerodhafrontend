import React from "react";

function Hero() {
  return (
    <section className="container-fluid">
      <div className="row p-5" style={{ backgroundColor: "rgb(56,126,209)" }}>
        <div className="col-6">
          <h1 style={{ color: "white" }} className="fs-3">
            Support portal
          </h1>
          <h1 style={{ color: "white" }} className="fs-3 mb-5 mt-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how to open the fno section?, why is my order getting rejected&#x1F50D;"
            style={{
              height: "70px",
              width: "100%",
              fontSize: "17px",
              fontWeight: "600",
              paddingLeft: "15px",
            }}
            className="mb-5"
          />
          <div className="mb-4">
            <a href="#" style={{ color: "white" , fontSize:"17px"}}>
              Track account opening
            </a>&nbsp;&nbsp;&nbsp;
            <a href="#" style={{ color: "white" ,fontSize:"17px"}}>
              Track account opening
            </a>&nbsp;&nbsp;&nbsp;
            <a href="#" style={{ color: "white",  fontSize:"17px"}}>
              Track account opening
            </a>
          </div>
          <a href="#"  style={{ color: "white",fontSize:"17px" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-6">
          <h1 style={{ color: "white" }} className="text-end">
            <a href="#" style={{ color: "white" }} className="fs-3">Track tickets</a>
          </h1>
          <h1 style={{ color: "white" , marginLeft:"10px"}} className="fs-5 mt-5 mb-5 ">Features</h1>
          <h3 className="text-center">
            <a href="#" className="fs-5 " style={{ color: "white", textDecoration:"none"    }}>
            1.
              Exclusion of Futures and Options contract on 16 Securities
            </a>
          </h3>
          <h3 className="text-center">
            <a href="#" className="fs-5 " style={{ color: "white", textDecoration:"none"  }}>
            2.
              Latest Intraday leverages and Square-off timings.
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Hero;
