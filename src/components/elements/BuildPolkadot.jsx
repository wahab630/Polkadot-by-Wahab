import React from "react";
import "./buildPolkadot.css";

const BuildPolkadot = () => {
  return (
    <>
      <div className="join">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-12 text-center">
              <span className="h1 fw-bold d-block mb-4 display-3">
                Build on Polkadot
              </span>
              <p className="buildf">
                <span className="d-block mt-3">
                  Polkadot is 100% open-source. Anyone can contribute to the
                  &nbsp;
                  <span className="underline">codebase</span>, run a node,{" "}
                  <br /> or &nbsp;
                  <span className="underline">build services</span> &nbsp; on
                  Polkadot. You can even &nbsp;
                  <span className="underline">get a grant.</span>
                </span>
              </p>
              <a
                className="btn btn-lg join-btn fw-bold rounded-pill mt-3 p-3"
                href="/community"
              >
                Start building
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildPolkadot;
