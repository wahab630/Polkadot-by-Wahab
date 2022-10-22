import React from "react";
import "./awhobuild.css";
const Awhobuild = () => {
  return (
    <>
      <div className="open--bg">
        <div className="container">
          <div className="row mb-4 justify-content-around">
            <div className="col-sm-12 col-lg-5">
              <span className="h1 d-block text-white fw-bold display-5">
                Who's building Polkadot?
              </span>
              <p className=" text-white lead">
                Polkadot is the flagship project by <br /> <span className=" text-underline"> Web3 Foundation</span>, a Swiss
                Foundation founded to facilitate a fully functional and
                user-friendly decentralized web.
              </p>
            </div>
            <div className="col-sm-12 col-lg-6">
              <p className=" text-white">
                The Web3 Foundation is partnering with best-in-class entities to
                build Polkadot and foster development of the services and
                applications that will run on it.
              </p>{" "}
              <p className=" text-white">
                Researchers from Inria Paris and ETH Zurich, developers from
                Parity Technologies, and capital partners from crypto-funds such
                as Polychain Capital are all working together to develop a
                superlative realization of Web3, with Polkadot at its core.
              </p>
              <p className=" text-white">
                Web3 Foundation is
                <span className=" text-underline"> providing grants</span> for
                development of the ecosystem. .
              </p>
            </div>
          </div>
          <div className="row justify-content-start justify-content-lg-around mt-5">
            <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
              <img
                className="open--img"
                src="https://polkadot.network/assets/img/logos/logo-circle-parity-white.svg?v=ea608e625d"
                alt=""
              />
            </div>
            <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
              <img
                className="open--img"
                src="https://polkadot.network/assets/img/logos/logo-circle-chainsafe-white.svg?v=ea608e625d"
                alt=""
              />
            </div>
            <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
              <img
                className="open--img"
                src="https://polkadot.network/assets/img/logos/logo-circle-soramitsu-white.svg?v=ea608e625d"
                alt=""
              />
            </div>
            <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
              <img
                className="open--img"
                src="https://polkadot.network/assets/img/logos/logo-circle-polkadot-js-white.svg?v=ea608e625d"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awhobuild;
