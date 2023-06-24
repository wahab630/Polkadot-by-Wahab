import React from "react";


const Tonchain = () => {
  return (
    <>
      <div className="container tonchain">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h1 className="fw-bold mb-3">
              On-chain treasury for decentralized project funding
            </h1>
            <p>
              Polkadot’s governance system also features an on-chain treasury
              that the community can use to fund projects that benefit the
              network. Any DOT holder can submit project funding and bounty
              proposals, and can nominate community members for tips based on
              work completed.
            </p>
            <p>
              With tens of millions of DOT available for spending, the treasury
              represents a powerful resource for fueling Web3 innovation.
            </p>
            <p>Learn more about the Polkadot treasury</p>
          </div>
          <div className="col-lg-6 col-md-6 d-flex align-items-center ">
            <img
              src="assets/td2.svg"
              alt="no"
              className="tonchain-img d-block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tonchain;
