import React from "react";


const Tparachains = () => {
  return (
    <>
      <div className="bg-dark tparachains">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h2 className="h1 mb-4 text-white fw-bold">
                Parachains: parallel <br /> transaction processing
              </h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-sm-12 col-lg-5 mb-4 mb-lg-0">
              <p className="lead text-white">
                Parachains are specialized blockchains that connect to Polkadot.
                They will have characteristics specialized for their use cases
                and the ability to control their own governance.
              </p>
              <p className="lead text-white">
                Interactions on parachains are processed in parallel, enabling
                highly scalable systems.
              </p>
              <p className="lead text-white">
                Transactions can be spread out across the chains, allowing many
                more transactions to be processed in the same period of time.
              </p>
              <button
               
                className="btn text-white tpara-btn rounded-pills btn-white btn-lg mt-1"
                
              >
                Learn more about parachains
              </button>
            </div>
            <div className="col-12 col-sm-6 offset-lg-1 col-lg-3">
              <p className="lead text-white">
                <strong>Current method:</strong>
                <br />
                Single transaction
              </p>
              <img
                src="https://polkadot.network/assets/img/dg-transactions-old.svg?v=ea608e625d"
                alt="no"
                className=" tparachains-img mb-2"
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <p className="lead text-white">
                <strong>Polkadot method:</strong>
                <br />
                Multi parallelized transactions
              </p>
              <img
                src="https://polkadot.network/assets/img/dg-transactions-new.svg?v=ea608e625d"
                alt="no"
                className="tparachains-img mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tparachains;
