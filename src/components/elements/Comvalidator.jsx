import React from "react";

const Comvalidator = () => {
  return (
    <>
      <div className="container comvalidator">
        <h1 className="text-black fw-bolder pb-4">Become a validator</h1>
        <div className="row mt-5">
          <div className="col-lg-6">
            <strong className="fs-5">1. Set up your machine</strong>
            <p>
              In addition to any usual CLI parameters that you run polkadot
              with, you'll need to add an extra two:
            </p>
            <ul>
              <li>
                --validator This tells your node to try to validate when it sees
                itself as a listed authority on the network;
              </li>
              <li>
                --key This provides your node with a secret key that lets it
                know whether it's a listed authority on the network, and, if it
                is, lets it sign statements to authorise the creation of new
                blocks.
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <strong className="fs-5">2. Apply to validate</strong>
            <p>
              New validators will be chosen every 24 hours on mainnet. You’ll
              need to create separate accounts for Controller, Session, and
              Stash keys on the Polkadot UI
              (https://polkadot.js.org/apps/#/accounts/create). These accounts
              will be used to represent and control the validator node you just
              set up.
            </p>
            <p>
              Next you will need to get some DOT from the faucet or by asking on
              Element. Assuming you have more DOT than the lowest staked
              validator or there is an open validator slot, you can register to
              be staked. A step-by-step guide demonstrating how to set up your
              accounts and bond your DOT is available on the wiki.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comvalidator;
