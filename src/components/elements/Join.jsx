import React from "react";
import "./join.css";

const Join = () => {
  return (
    <>
      <div className="join">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-12 text-center">
              <span className="h1 fw-bold d-block mb-4">
                Want to get involved?
              </span>
              <a className="btn btn-lg join-btn fw-bold rounded-pill" href="/community">
                Join the Community
              </a>
              <span className="d-block mt-3">
                or learn about how to{" "}
                <a href="/build" className="text-underline">
                  build on Polkadot
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
