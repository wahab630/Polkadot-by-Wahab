import React from "react";
import "./txcm.css";

const Txcm = () => {
  return (
    <>
      <div className="container tbetter-p">
        <div className="row ">
          <div className="col-lg-6 col-md-6">
            <img
              src="https://polkadot.network/assets/img/dg-xcm.svg?v=ea608e625d"
              alt="no"
              className="tbetter-img d-block"
            />
          </div>
          <div className="col-md-6 col-lg-6">
            <h1 className="fw-bold mb-3">
              XCM: a secure cross-chain communication standard
            </h1>
            <p>
              For blockchains to work together and form the basis of Web3, they
              need a common language for communication. Polkadot sets the
              standard with XCM, a cross-consensus communication format and
              programming language that allows blockchains of different designs
              to securely exchange arbitrary data, code, and value. In this way,
              a new wave of rich cross-chain applications and services can be
              built that tap into the features and benefits of different chains.
            </p>
            <p>Learn more about XCM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Txcm;
