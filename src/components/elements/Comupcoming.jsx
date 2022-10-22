import React from "react";

const Comupcoming = () => {
  return (
    <>
      <div className="comupcomming">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h1 className="display-4 text-white fw-bolder mb-4">
                Upcoming <br /> events
              </h1>
              <p className="fs-5 lead text-white mb-5">
                Want to host a Polkadot meetup in your city? Check out <br /> the
                resources and guides for hosting your own Polkadot <br /> meetup.
              </p>
              <button className="btn comup-btn fw-bold text-white">
                Host a Polkadot Meetup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comupcoming;
