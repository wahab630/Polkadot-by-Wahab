import React from "react";


const NetworkCards = () => {
  return (
    <>
      <div className="NC-bg bg-dark">
        <div className="container">
          <div className="row mb-4 justify-content-md-center justify-content-lg-around">
            <div className="col-12 col-md-6 col-lg-4 mb-md-2 text-lg-center">
              <span className="card bg-dark border-0 shadow-none">
                <div className="">
                  <img
                    className="nc-img "
                    src="assets/home-icon-token-1.svg"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <div>
                    <h5 className="h5 text-white mb-2 d-block fw-bold">Governance</h5>
                    <p className="text-white">
                      Polkadot token holders have complete control over the
                      protocol. All privileges, which on other platforms are
                      exclusive to miners, will be given to the Relay Chain
                      participants (DOT holders), including managing exceptional
                      events such as protocol upgrades and fixes.
                    </p>
                  </div>
                </div>
              </span>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-md-2 text-lg-center">
              <span className="card bg-dark border-0  shadow-none">
                <div className="px-md-3 pt-md-3 mx-4 mx-md-1 mx-lg-3">
                  <img
                    className="nc-img "
                    src="assets/home-icon-token-2.svg"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <div>
                    <h5 className="h5 text-white mb-2 d-block fw-bold">Staking</h5>
                    <p className="text-white">
                      Game theory incentivizes token holders to behave in honest
                      ways. Good actors are rewarded by this mechanism whilst
                      bad actors will lose their stake in the network. This
                      ensures the network stays secure.
                    </p>
                  </div>
                </div>
              </span>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-md-2 text-lg-center">
              <span className="card bg-dark border-0  shadow-none">
                <div className="px-md-3 pt-md-3 mx-4 mx-md-1 mx-lg-3">
                  <img
                    className="nc-img "
                    src="assets/home-icon-token-3.svg"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <div>
                    <h5 className="h5 text-white mb-2 d-block fw-bold">Bonding</h5>
                    <p className="text-white">
                      New parachains are added by bonding tokens. Outdated or
                      non-useful parachains are removed by removing bonded
                      tokens. This is a form of proof of stake.
                    </p>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="row justify-content-center" >
      <div className="col col-12 col-md-8 col-lg-4 text-center" >
        <span className="h3 d-block mb-4 text-white fw-bold" >Learn more about the DOT token</span>
        <a className="btn  btn-lg nc-btn rounded-pill fw-bold text-white" href="/dot-token" >Discover DOT</a>
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default NetworkCards;
