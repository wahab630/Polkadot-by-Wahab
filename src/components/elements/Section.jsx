import React from "react";
import "./section.css";

const Section = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="text-center text-md-start">
                <img
                  src="https://polkadot.network/assets/img/icons/home-icon1.svg?v=ea608e625d"
                  alt=""
                  className="card--img mb-1"
                />
                <div>
                  <h5 className="h5 mb-2 mt-2  text-center text-md-start fw-bold">
                    True interoperability
                  </h5>
                  <p className="text-center text-md-start pe-md-2">
                    Polkadot enables cross-blockchain transfers of any type of
                    data or asset, not just tokens. Connecting to Polkadot gives
                    you the ability to interoperate with a wide variety of
                    blockchains in the Polkadot network.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="text-center text-md-start">
                <img
                  src="https://polkadot.network/assets/img/icons/home-icon2.svg?v=ea608e625d"
                  alt=""
                  className="card--img mb-1"
                />
                <div>
                  <h5 className="h5 mb-2 mt-2 fw-bold text-center text-md-start">
                    Economic &amp; transactional scalability
                  </h5>
                  <p className="text-center text-md-start pe-md-2">
                    Polkadot provides unprecedented economic scalability by
                    enabling a common set of validators to secure multiple
                    blockchains. Polkadot provides transactional scalability by
                    spreading transactions across multiple parallel blockchains.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="text-center text-md-start">
                <img
                  src="https://polkadot.network/assets/img/icons/home-icon3.svg?v=ea608e625d"
                  alt=""
                  className="card--img mb-1"
                />
                <div>
                  <h5 className="h5 mb-2 mt-2 fw-bold text-center text-md-start">
                    Easy blockchain innovation
                  </h5>
                  <p className="text-center text-md-start pe-md-2">
                    Create a custom blockchain in minutes using the{" "}
                    <span className="underline">Substrate</span>{" "}
                    framework. Connect your chain to Polkadot and get
                    interoperability and security from day one. This ease of
                    development helps Polkadot's network grow.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="text-center text-md-start">
                <img
                  src="https://polkadot.network/assets/img/icons/home-icon4-b.svg?v=ea608e625d"
                  alt=""
                  className="card--img mb-1"
                />
                <div>
                  <h5 className="h5 mb-2 mt-2 fw-bold text-center text-md-start">
                    High energy efficiency
                  </h5>
                  <p className="text-center text-md-start pe-md-2">
                    Polkadot consumes a small fraction of the energy used by
                    conventional blockchains thanks to its next-generation
                    nominated proof-of-stake (NPoS) model. Using the equivalent
                    of ~6.6 US households worth of energy per year, Polkadot has
                    the {" "}
                    <span className="underline">lowest carbon footprint</span>{" "}
                    
                    among proof-of-stake protocols analyzed in{" "}
                    <span className="underline"> recent research</span>{" "}
                    
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="text-center text-md-start">
                <img
                  src="https://polkadot.network/assets/img/icons/home-icon5.svg?v=ea608e625d"
                  alt=""
                  className="card--img mb-1"
                />
                <div>
                  <h5 className="h5 mb-2 mt-2 fw-bold text-center text-md-start">
                    Security for everyone
                  </h5>
                  <p className="text-center text-md-start pe-md-2">
                    Polkadot's novel data availability and validity scheme
                    allows chains to interact with each other in a meaningful
                    way. Chains remain independent in their governance, but
                    united in their security.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="text-center text-md-start">
                <img
                  src="https://polkadot.network/assets/img/icons/home-icon6.svg?v=ea608e625d"
                  alt=""
                  className="card--img mb-1"
                />
                <div>
                  <h5 className="h5 mb-2 mt-2 fw-bold text-center text-md-start">
                    User-driven governance
                  </h5>
                  <p className="text-center text-md-start pe-md-2">
                    Polkadot has a sophisticated governance system where all
                    stakeholders have a voice. Network upgrades are coordinated
                    on-chain and enacted autonomously and without forking the
                    network, ensuring that Polkadot’s development remains
                    future-proof and community-driven.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center py-3">
            <div className="col col-12 col-md-6 text-center">
              <span className="h3 d-block mb-4 fw-bold">
                Learn more about Polkadot's technology
              </span>
              <a
                className="btn section-btn fw-bold rounded-pill btn-lg"
                href="/technology"
              >
                Discover Polkadot
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
