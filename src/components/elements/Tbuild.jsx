import React from "react";


const Tbuild = () => {
  return (
    <>
      <div className="tbuild bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-5 mb-3 d-flex align-items-center ">
              
              <img
                src="assets/tbuild.png"
                alt="no"
                className="Tbuild-img "
              />
              
              
            </div>
            <div className="col-md-12 col-lg-6">
              <span className="h2 d-block mb-4 fw-bold">
                Built with the best technology
              </span>
              <p>
                Polkadot’s relay chain is built with{" "}
                <span className="text-underline">Substrate</span>, a
                blockchain-building framework that is the distillation of Parity
                Technologies’ learnings building Ethereum, Bitcoin, and
                enterprise blockchains.
              </p>
              <p>
                Polkadot’s state machine is compiled to WebAssembly (Wasm), a
                super performant virtual environment. Wasm is developed by major
                companies, including Google, Apple, Microsoft, and Mozilla, that
                have created a large ecosystem of support for the standard.
              </p>
              <p>
                Polkadot’s networking uses libp2p, a flexible cross-platform
                network framework for peer-to-peer applications. Positioned to
                be the standard for future decentralized applications, libp2p
                handles the peer discovery and communication in the Polkadot
                ecosystem.
              </p>
              <p>
                The Polkadot runtime environment is being coded in Rust, C++,
                and Golang, making Polkadot accessible to a wide range of
                developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tbuild;
