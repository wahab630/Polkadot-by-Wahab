import React from "react";
import './tbetter.css'
const Tbetter = () => {
  return (
    <>
      <div className="container tbetter-p">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h1 className="fw-bold mb-3">A better security model</h1>
            <p>
              In both Proof-of-Work and Proof-of-Stake systems, blockchains
              compete with each other over resources to secure their networks,
              and blockchains are easily attacked until they develop a
              significant community to support their network.
            </p>
            <p>
              Polkadot takes a different approach by letting blockchains pool
              their security, which means that the blockchains' security is
              aggregated and applied to all.
            </p>
            <p>
              By connecting to Polkadot, blockchain developers can secure their
              blockchain from day one.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <img src="https://polkadot.network/assets/img/dg-security-model.svg?v=ea608e625d" alt="no" className="tbetter-img d-block" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tbetter;
