import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row pt-3 pt-md-5">
            <div className="col-12 col-md-7 col-lg-6 mb-4 d-flex flex-column justify-content-center">
              <h1 className=" fw-bold hero--h text-center display-1 text-md-start">
                The multichain vision for Web3 starts here.
              </h1>
              <p className="lead text-center text-md-start">
                Polkadot unites and secures a growing ecosystem of specialized
                blockchains called parachains. Apps and services on Polkadot can
                securely communicate across chains, forming the basis for a
                truly interoperable decentralized web.
              </p>
              <div className="d-none d-md-block justify-content-center mt-2">
                <a href="/parachains" className="btn hero-btn btn-lg me-2 fw-bold rounded-pill">
                  Learn Parachains
                </a>
                <a
                  href="/cross-chain-communication"
                  className="btn hero-btn btn-lg fw-bold rounded-pill"
                >
                  Learn Cross-Chain
                </a>
              </div>
            </div>
            <div class="col-12 col-md-5 col-lg-6 mb-4 px-xl-5 d-flex flex-column justify-content-center align-items-center">
              <div className="inner">
              <img className="hero--img " src="../assets/outer.svg" alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
