import React from "react";
import "./buldeasily.css";

const Buildeasily = () => {
  return (
    <>
      <div className="buildeasily bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 mx-auto">
              <h2 className="h2 text-white text-center display-6 fw-bold">
                Easily build a Polkadot parachain with <br /> Substrate
              </h2>
              <p className="lead color text-center">
                Build your application-specific blockchain with the{" "}
                <span class="text-white text-underline">Substrate</span>{" "}
                framework now and easily connect it to <br /> Polkadot after
                launch.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-white">
              <h4 className="fw-bold">
                Native Polkadot <br /> compatibility
              </h4>
              <p>
                Blockchains built with Substrate are natively compatible with
                Polkadot, so they can be easily connected to Polkadot as a
                parachain or parathread.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 text-white">
              <h4 className="fw-bold">Fork-free upgrades</h4>
              <p>
                Upgrade your blockchain without a hard fork. Your runtime is a
                Wasm binary stored on-chain and can be updated using your
                chain’s governance mechanism.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 text-white">
              <h4 className="fw-bold">Plug-and-play modular framework</h4>
              <p>
                Substrate allows you to simply plug in the functionalities you
                need, while also giving you the freedom to customize as needed.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-white">
              <h4 className="fw-bold">Interchain connectivity</h4>
              <p>
                By connecting your blockchain to Polkadot, your blockchain will
                be able to pass arbitrary messages to other chains in the
                Polkadot network.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 text-white">
              <h4 className="fw-bold">Instant security</h4>
              <p>
                Simply by connecting your blockchain to Polkadot, your
                blockchain will be secured by Polkadot’s pooled security.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 text-white">
              <h4 className="fw-bold">Multiple languages</h4>
              <p>
                With Substrate, you can write your blockchain logic in any
                language that can compile to WebAssembly (Rust, C/C++, C#, Go,
                etc).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buildeasily;
