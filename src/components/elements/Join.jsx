import React from "react";


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
              <a className="btn  join-btn fw-bold " href="/community">
                Join the Community
              </a>
              <span className="d-block mt-3">
                or learn about how to{" "}
                <span className="underline">
                  build on Polkadot
                </span>
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
