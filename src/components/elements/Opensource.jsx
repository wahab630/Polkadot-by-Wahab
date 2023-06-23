import React from "react";


const Opensource = () => {
  return (
    <>
      <div className="open--bg">
        <div className="container">
          <div className="row mb-4 justify-content-around">
            <div className="col-sm-12 col-lg-5">
              <span className="h1 d-block text-white fw-bold">
                An open-source protocol built for everyone
              </span>
            </div>
            <div className="col-sm-12 col-lg-6">
              <p className="lead text-white">
                Polkadot is an open-source project founded by the{" "} <br />
                
                <span className=" text-underline"> Web3 Foundation</span>{" "}
                .
              </p>
              <p className="lead text-white">
                Web3 Foundation has commissioned five teams and over 100
                developers to build Polkadot, including:
              </p>
            </div>
          </div>
          <div className="row justify-content-start justify-content-lg-around mt-5">
            <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
              <img
                className="open--img"
                src="assets/ti-1.svg"
                alt=""
              />
            </div>
            <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
              <img
                className="open--img"
                src="assets/ti-2.svg"
                alt=""
              />
            </div>
            <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
              <img
                className="open--img"
                src="assets/ti-3.svg"
                alt=""
              />
            </div>
            <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
              <img
                className="open--img"
                src="assets/ti-4.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Opensource;
