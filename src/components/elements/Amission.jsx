import React from "react";
import './amission.css'

const Amission = () => {
  return (
    <>
      <div className="Amission bg-dark">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-6">
              <span className="h1 text-white d-block fw-bold display-5">
                The Polkadot <br /> mission
              </span>
              <p className="lead text-white mt-4">
                We envision a Web where our identity and our data is our own -
                safely secured from any central authority.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <p className="text-white">
                Polkadot will enable a completely decentralized web where users
                are in control.
              </p>
              <p className="text-white">
                Polkadot is built to connect private and consortium chains,
                public and permissionless networks, oracles, and future
                technologies that are yet to be created. Polkadot facilitates an
                internet where independent blockchains can exchange information
                and transactions in a trustless way via the Polkadot relay
                chain.
              </p>
              <p className="text-white">
                Polkadot makes it easier than ever to create and connect
                decentralized applications, services, and institutions. By
                empowering innovators to build better solutions, we seek to free
                society from its reliance on a broken web where its large
                institutions can’t violate our trust.
              </p>
              <a className="btn amission-btn rounded-pills fw-bold  mt-2 text-white" href="/technology">
                Learn About the Technology
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Amission;
