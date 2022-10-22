import React from "react";
import "./troadmap.css";

const Troadmap = () => {
  return (
    <>
      <div className="Tnetwork ">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-lg-8">
              <h2 className="h1 text-white display-5 pb-4 fw-bold">Roadmap</h2>
              <p className="lead text-white">
                The launch of Polkadot v1 began in May 2020 with the Relay Chain
                genesis block and finished in December 2021 with the launch of
                parachains. Several post-launch developments and optimizations
                are expected for 2022 and beyond.
              </p>
              <button className="btn troad-btn mt-3">See Launch Roadmap</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Troadmap;
