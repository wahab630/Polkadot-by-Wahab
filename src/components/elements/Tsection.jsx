import React from "react";


const Tsection = () => {
  return (
    <>
      <div className="tsection bg-dark">
        <div className="container pb-5">
          <div className="row ">
            <div className="col-md-6 col-lg-4 mb-sm-3 mb-3">
              <div className="card d-flex flex-row tsec-card rounded shadow border-0">
                <div className="d-flex  align-items-center ms-3">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-github.svg?v=ea608e625d"
                    className="t-card-img"
                    alt="no"
                  />
                </div>

                <div className="card-body">
                  <h5 class="mb-1 fw-bold">GitHub</h5>
                  <p class="mb-0">Latest version &amp; history.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-3 mb-3">
              <div className="card d-flex flex-row rounded shadow border-0">
                <div className="d-flex  align-items-center ms-3">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-documentation.svg?v=ea608e625d"
                    className="t-card-img"
                    alt="no"
                  />
                </div>

                <div className="card-body">
                  <h5 class="mb-1 fw-bold">Documentation</h5>
                  <p class="mb-0">Read the documentation.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-3 mb-3">
              <div className="card d-flex flex-row rounded shadow border-0">
                <div className="d-flex  align-items-center ms-3">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-element.svg?v=ea608e625d"
                    className="t-card-img"
                    alt="no"
                  />
                </div>

                <div className="card-body">
                  <h5 class="mb-1 fw-bold">Element chat</h5>
                  <p class="mb-0">Get your questions answered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5 ">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-xl-8">
              <div className="Tsection-big-img">
                {/* <img
                  className="Tsection-big-img"
                  src="https://polkadot.network/assets/img/dg-network-xl-2.svg?v=ea608e625d"
                  alt=""
                /> */}
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xl-4">
              <div>
                <h1 className="text-white">
                  Any type of data across any type of blockchain
                </h1>
                <p className=" lead text-white">
                  Polkadot is a network protocol that allows arbitrary data—not
                  just tokens—to be transferred across blockchains.
                </p>
                <p className="text-white">
                  This means Polkadot is a true multi-chain application
                  environment where things like cross-chain registries and
                  cross-chain computation are possible.
                </p>
                <p className="text-white">
                  Polkadot can transfer this data across public, open,
                  permissionless blockchains as well as private, permissioned
                  blockchains.
                </p>
                <p className="text-white">
                  This makes it possible to build applications that get
                  permissioned data from a private blockchain and use it on a
                  public blockchain. For instance, a school's private,
                  permissioned academic records chain could send a proof to a
                  degree-verification smart contract on a public chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tsection;
