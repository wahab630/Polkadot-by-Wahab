import React from "react";

const Buildtools = () => {
  return (
    <>
      <div className="buildtool py-5 my-5">
        <div className="container">
          <div className="row mb-4  text-center">
            <div className="col">
              <h3 className="h2 fw-bolder mb-5">Tools that come with Substrate</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h4 className="color fw-bold">
                    Polkadot Telemetry <br /> Service
                  </h4>
                  <p>Network information</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h4 className="color fw-bold">
                    Substrate and Polkadot <br /> UI
                  </h4>
                  <p>Built with React.js and RxJS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow h-100">
                <div className="card-body">
                  <h4 className="color fw-bold">Substrate UI</h4>
                  <p>Built with the Bonds oo7 library</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h4 className="color fw-bold">Polkabot</h4>
                  <p>Network monitoring and reporting</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h4 className="color fw-bold">Polkascan</h4>
                  <p>Blockchain data explorer and analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buildtools;
