import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="container-fluid hero">
        <div className="container">
          <div className="row pt-3 pt-md-5">
            <div className="col-12 col-md-7 col-lg-6 mb-4 d-flex flex-column justify-content-center">
              <h1 className=" fw-bolder hero--h text-center display-4 text-md-start">
                The multichain vision for <br /> Web3 starts <br /> here.
              </h1>
              <p className="lead text-center text-md-start">
                Polkadot unites and secures a growing ecosystem of <br />{" "}
                specialized blockchains called parachains. Apps and <br />{" "}
                services on Polkadot can securely communicate across <br />{" "}
                chains, forming the basis for a truly interoperable <br />{" "}
                decentralized web.
              </p>
              <div className="mt-2 ">
                <button className="btn hero-btn  me-2   fw-bold rounded-pill">
                  Learn Parachains
                </button>
                <button className="btn hero-btn mt-sm-2 mt-0  fw-bold rounded-pill">
                  Learn Cross-Chain
                </button>
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
