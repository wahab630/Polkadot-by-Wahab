import React from "react";


const Tconnecting = () => {
  return (
    <>
      <div className="tconnecting">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="h2 mb-4 fw-bold text-center text-md-left">
                Connecting the dots
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 tconnecting-card-1">
              <div className="card border-0 " >
                <img className=" tconnecting-card-img" src="assets/tconn1.svg"  alt=".no.." />
                <div className="card-body px-0">
                  <h5 className="card-title fw-bold">Relay Chain</h5>
                  <p className="card-text">
                  The heart of Polkadot, responsible for the network’s shared security, consensus and cross-chain interoperability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 tconnecting-card-1">
              <div className="card border-0 " >
                <img className=" tconnecting-card-img" src="assets/tconn2.svg"  alt=".no.." />
                <div className="card-body px-0">
                  <h5 className="card-title fw-bold">Parachains</h5>
                  <p className="card-text">
                  Sovereign blockchains that can have their own tokens and optimize their functionality for specific use cases.                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 tconnecting-card-1">
              <div className="card border-0 " >
                <img className=" tconnecting-card-img" src="assets/tconn3.svg"  alt=".no.." />
                <div className="card-body px-0">
                  <h5 className="card-title fw-bold">Parathreads</h5>
                  <p className="card-text">
                  Similar to parachains but with a pay-as-you-go model. More economical for blockchains that don’t need continuous connectivity to the network.                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 tconnecting-card-1 ">
              <div className="card border-0" >
                <img className=" tconnecting-card-img" src="assets/tconn4.svg"  alt=".no.." />
                <div className="card-body px-0">
                  <h5 className="card-title fw-bold">Bridges</h5>
                  <p className="card-text">
                  Allow parachains and parathreads to connect and communicate with external networks like Ethereum and Bitcoin.                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3 className="h2 mb-4 fw-bold text-center text-md-left">
              Consensus Roles
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 tconnecting-card-1 ">
              <div className="card border-0 " >
                <img className=" tconnecting-card-img" src="assets/tconn5.svg"  alt=".no.." />
                <div className="card-body px-0">
                  <h5 className="card-title fw-bold">Nominators</h5>
                  <p className="card-text">
                  Secure the Relay Chain by selecting trustworthy validators and staking dots.  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 tconnecting-card-1 ">
              <div className="card border-0 " >
                <img className=" tconnecting-card-img" src="assets/tconn6.svg"  alt=".no.." />
                <div className="card-body px-0">
                  <h5 className="card-title fw-bold">Validators</h5>
                  <p className="card-text">
                  Secure the relay chain by staking dots, validating proofs from collators and participating in consensus with other validators.    </p>            </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 tconnecting-card-1">
              <div className="card border-0 " >
                <img className=" tconnecting-card-img" src="assets/tconn7.svg"  alt=".no.." />
                <div className="card-body px-0">
                  <h5 className="card-title fw-bold">Collators</h5>
                  <p className="card-text">
                  Maintain shards by collecting shard transactions from users and producing proofs for validator. </p>
                </div>
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="col-12">
              <h3 className="h2 mb-4 fw-bold  text-md-left">
              Governance Roles
              </h3>
            </div>
          </div>
          <div className="row">           
            <div className="col-md-6 col-lg-3 tconnecting-card-1 ">
              <div className="card border-0 " >
                <img className=" tconnecting-card-img" src="assets/tconn8.svg"  alt=".no.." />
                <div className="card-body px-0">
                  <h5 className="card-title fw-bold">Council Members</h5>
                  <p className="card-text">
                  Elected to represent passive stakeholders in two primary governance roles: proposing referenda and vetoing dangerous or malicious referenda.  </p>            </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 tconnecting-card-1 ">
              <div className="card border-0 " >
                <img className=" tconnecting-card-img" src="assets/tconn9.svg"  alt=".no.." />
                <div className="card-body px-0">
                  <h5 className="card-title fw-bold">Technical Committee</h5>
                  <p className="card-text">
                  Composed of teams actively building Polkadot. Can propose emergency referenda, together with the council, for fast-tracked voting and implementation.     </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Tconnecting;
