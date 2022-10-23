import React from "react";


const Founded = () => {
  return (
    <>
      <div className="founded-bg pt-5">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-md-10  aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p className="h1 display-4 text-white mb-4 fw-bold">
                Founded by some of the blockchain industry’s foremost builders
              </p>
              <a
                href="/about"
                className="btn  btn-lg founded-btn text-bold rounded-pill text-white"
              >
                Learn About the Polkadot Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founded;
