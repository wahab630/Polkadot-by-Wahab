import React from "react";


const Tgrandpa = () => {
  return (
    <>
      <div className="container tgrandpa">
        <div className="row ">
          <div className="col-lg-6 col-md-6 d-flex align-items-center ">
            <img
              src="assets/td3.svg"
              alt="no"
              className="tgrandpa-img d-block"
            />
          </div>
          <div className="col-md-6 col-lg-6">
            <h1 className="fw-bold mb-3">
              GRANDPA: a trustworthy consensus algorithm
            </h1>
            <p>
              GRANDPA: a trustworthy consensus algorithm Polkadot uses its
              original GRANDPA (GHOST-based Recursive Ancestor Deriving Prefix
              Agreement) consensus for a more secure and resilient network.
            </p>
            <p>
              Under good network conditions, GRANDPA can finalize blocks nearly
              instantly. Under bad network conditions, like a network partition,
              GRANDPA can finalize large quantities of blocks (theoretically
              millions) at once when the partitions resolve.
            </p>
            <p>Learn more about GRANDPA.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tgrandpa;
