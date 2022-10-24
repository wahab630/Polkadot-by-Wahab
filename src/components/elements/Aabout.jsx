import React from "react";
import './aabout.css'

const Aabout = () => {
  return (
    <>
      <div className="container aabout">
        <div className="row text-center justify-content-center">
          <div className=" col-md-10 col-lg-8 ">
            <h1
              className="display-3 fw-bold mb-4 text-dark aos-animate "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              About Polkadot, a <br /> platform for Web3
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aabout;
