import React from "react";


const Tteams = () => {
  return (
    <>
      <div className="container tteam">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-md-6">
            <h2 className="text-black fw-bolder">
              What are teams building on <br /> Polkadot? Just a few examples:
            </h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6">
            <div className="card shadow border-0">
              <div className="card-body">
                <p>
                  {" "}
                  <strong>Smart contract chains</strong> &nbsp;with <br />{" "}
                  WebAssembly smart contracts (Astar, Moonbeam){" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <p>
                  {" "}
                  <strong>Data curation networks </strong> &nbsp;that connect
                  all file storage chains into curated data sets
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow border-0">
              <div className="card-body">
                <p>
                  {" "}
                  <strong>Oracle chains </strong> &nbsp;that make off-chain data
                  available to all contracts on the <br /> Polkadot network
                  (ChainLink)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <p>
                  {" "}
                  <strong>Identity chains </strong> &nbsp; that link accounts to
                  a persistent identity and enable access to other parachains
                  through fewer accounts (Kilt)
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow border-0">
              <div className="card-body">
                <p>
                  {" "}
                  <strong>Financial chains </strong> &nbsp; that allow you to
                  hold all your assets in one portfolio, including via bridges
                  to Bitcoin, Ethereum, Bitcoin Cash, Litecoin and ZCash (Acala,
                  Parallel Finance)
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <p>
                  {" "}
                  <strong>Internet of Things chains</strong> &nbsp;that set IoT
                  standards for machine-to-machine communication (Robonomics)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <p>
                  {" "}
                  <strong>Zero Knowledge </strong> &nbsp;privacy chains, or bridges to existing ZK-snarks chains
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <p>
                  {" "}
                  <strong>File storage chains  </strong> &nbsp;that incentivize storing data on-chain
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow border-0">
              <div className="card-body">
                <p>
                  {" "}
                  <strong>Bridge to Ethereum,  </strong> &nbsp;allowing Ethereum smart contracts to interact with the Polkadot network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tteams;
