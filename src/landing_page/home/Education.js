import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5">
          <div className="row">
            <div className="col mt-2">
              <img
                src="media/images/education.svg"
                style={{ width: "80%" }}
                alt="img"
              />
              <p>Free a/c opening</p>
            </div>
          </div>
        </div>
        
        <div className="col-6 mt-5">
          <h1 className="mt-5">Free and open market education</h1>
          <p className="mt-4 mx-4 ">
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none", marginBottom:"50px" }} className="mx-4">
            Varsity<i class="fa-solid fa-arrow-right "></i>
          </a>
         
          <p className="mt-4 mx-4">
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none", marginBottom:"50px" }} className="mx-4">
            Trading Q/A<i class="fa-solid fa-arrow-right "></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
