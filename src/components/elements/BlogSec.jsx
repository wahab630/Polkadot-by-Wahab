import React from "react";


const BlogSec = () => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <span className="h1 d-block display-md-4 fw-bold">
                From the blog
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-md-3 mb-0 col-lg-4 d-flex">
              <div className="card border shadow">
                <img
                  className="card-img-top"
                  src="https://polkadot.network/content/images/2022/10/image1.png"
                  alt=""
                />

                <div className="card-body py-3">
                  <span className="mb-2 d-block pinkcolor"> Parachain</span>

                  <h5 className="fw-bold">
                    {" "}
                    First Parachain Successfully Migrates from Kusama to
                    Polkadot
                  </h5>

                  <div>
                    <p className="mb-0">
                      KILT Protocol's migration from Kusama to Polkadot is an
                      important technical milestone and the first parachain
                      migration. Polkadot's 'canary network' model allows Web3
                      projects to test their technology in a real-world
                      environment before upgrading to stable production
                      networks....
                    </p>
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <div className="d-flex ">
                    <img
                      src="https://polkadot.network/content/images/2021/12/ghost_avatar_polkadot.png"
                      alt=""
                      className="avatar me-2"
                    />
                    <span>Polkadot</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="card border shadow">
                <img
                  className="card-img"
                  src="https://polkadot.network/content/images/2022/09/004-smol.png"
                  alt=""
                />

                <div className="card-body py-3">
                  <span className="mb-2 d-block pinkcolor">Polkadot</span>

                  <h5 className="fw-bold">Polkadot Roadmap Roundup</h5>

                  <div>
                    <p className="mb-0">
                      A proposed roadmap for upcoming developments on Polkadot.
                      Get the latest status on asynchronous backing,
                      parathreads, XCMv3, governance, common-good parachains and
                      more....
                    </p>
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <div className="d-flex ">
                    <img
                      src="https://polkadot.network/content/images/2021/12/ghost_avatar_polkadot.png"
                      alt=""
                      className="avatar me-2"
                    />
                    <span>Polkadot</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="card border shadow">
                <img
                  className="card-img-top"
                  src="https://polkadot.network/content/images/2022/08/image1.jpg"
                  alt=""
                />

                <div className="card-body py-3">
                  <span className="mb-2 d-block pinkcolor"> Polkadot</span>

                  <h5 className="fw-bold">
                    Sub0, the Polkadot Developer Conference, comes to Lisbon in
                    November
                  </h5>
                  <div>
                    <p className="mb-0">
                      The two-day live sub0 conference will run on November
                      28th-29th. Featuring keynote presentations, breakout
                      sessions, workshops &amp; side events. Sign up for ticket
                      updates....
                    </p>
                  </div>
                </div>
                <div className="card-footer border-0 bg-white">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://polkadot.network/content/images/2021/12/ghost_avatar_polkadot.png"
                      alt=""
                      className="avatar me-2"
                    />
                    <span>Polkadot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSec;
