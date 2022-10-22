import React from "react";

const Comrun = () => {
  return (
    <>
      <div className="comrun bg-dark">
        <div className="container">
          <h1 className="text-white fw-bold text-center mb-5">
            Run a node and interact with the <br /> Polkadot testnet
          </h1>
          <div className="row pt-3">
            <div className="col-lg-6">
              <p className="fs-5 text-white">
                If you'd like to play with Polkadot, you'll need to install and
                run the Parity Polkadot client. Get the client at Parity’s
                Polkadot repo
              </p>
              <p className="fs-5 text-white">
                Alexander is the current default public testnet for Polkadot. By
                default, any node running on the Alexander testnet will appear
                on the telemetry.polkadot.io
              </p>
              <p className="fs-5 text-white">
                The testnet allows you to create accounts, propose governance
                referenda, stake testnet DOT to become a validator or nominate
                other accounts as validators with your testnet DOT.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="fs-5 text-white">
                Connect your running node to the main Polkadot user interface to
                play around.
              </p>
              <p className="fs-5 text-white">
                Get testnet DOT to stake by following these instructions on the
                Polkadot Wiki
              </p>
              <p className="fs-5 text-white">
                If you don’t want to run a node, you can still interact with the
                network by using the explorer
              </p>
              <p className="fs-5 text-white">
                Before interacting with the testnet, please read this legal
                notice
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comrun;
