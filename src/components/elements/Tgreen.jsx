import React from "react";


const Tgreen = () => {
  return (
    <>
      <div className="container tgreen">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h1 className="fw-bold mb-3">A green, energy-efficient protocol</h1>
            <p>
              It’s hard to get behind blockchain as the next technological
              revolution when it wastes so much energy. Polkadot is designed to
              power the web’s next big wave of innovation, without the high
              energy consumption of conventional proof-of-work blockchains.
            </p>
            <p>
              Polkadot’s Nominated Proof-of-stake (NPoS) model uses a small
              fraction of the energy consumed by conventional blockchains, and
              has the lowest carbon footprint among proof-of-stake protocols
              analyzed in recent research.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-center ">
            <img
              src="https://polkadot.network/assets/img/dg-green-energy.svg?v=ea608e625d"
              alt="no"
              className="tgreen-img d-block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tgreen;
