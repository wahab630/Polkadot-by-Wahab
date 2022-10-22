import React from "react";
import "./buildgrant.css";

const Buildgrant = () => {
  return (
    <>
      <div className="buildgrant">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <h2 className="fw-bolder">
                Get a grant to build the Polkadot ecosystem
              </h2>
              <p className="fs-5">
                Web3 Foundation provides grants to steward research and
                development of Polkadot and the Web3 tech stack. The program
                funds work on runtime modules and parachains, development tools,
                UI, protocol integrations, maintenance, and more.
              </p>
              <a
                className="btn btn-lg join-btn fw-bold rounded-pill mt-3 "
                href="/community"
              >
               Learn More
              </a>
            </div>
            <div className="col-lg-6 col-md-12">
              <ul className="fs-5">
                <li>
                  Development and deployment tooling (e.g. IDEs, parachain
                  development kits)
                </li>
                <li>
                  Polkadot Runtime Modules (e.g. interoperability, governance)
                </li>
                <li>
                  Second layer protocols (e.g. dedicated parachains, state
                  channels)
                </li>
                <li>Monitoring (e.g. explorers)</li>
                <li>
                  Protocol integrations (e.g. bridges to other blockchains,
                  distributed file storage)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buildgrant;
