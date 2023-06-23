import React from "react";

const BlogSec = () => {
  const data = [
    {
      img: "assets/image1.webp",
      caption: "Parachain",
      heading:
        " First Parachain Successfully Migrates from Kusama to  Polkadot",
      paragraph:
        " KILT Protocol's migration from Kusama to Polkadot is an important technical milestone and the first parachain      migration. Polkadot's 'canary network' model allows Web3      projects to test their technology in a real-world      environment before upgrading to stable production networks....",
    },
    {
      img: "assets/image2.webp",
      caption: "Polkadot",
      heading: "Polkadot Roadmap Roundup",
      paragraph:
        " A proposed roadmap for upcoming developments on Polkadot. Get the latest status on asynchronous backing, parathreads, XCMv3, governance, common-good parachains and more....",
    },
    {
      img: "assets/image3.webp",
      caption: "Polkadot",
      heading:
        "  Sub0, the Polkadot Developer Conference, comes to Lisbon in      November",
      paragraph:
        "The two-day live sub0 conference will run on November      28th-29th. Featuring keynote presentations, breakout sessions, workshops &amp; side events. Sign up for ticket updates....",
    },
  ];

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
            {data.map((v, i) => {
              return (
                <>
                  <div className="col-12 col-md-6 mb-3  col-lg-4 d-flex">
                    <div className="card border shadow">
                      <img className="card-img-top" src={v.img} alt="no" />
                      <div className="card-body pt-3 pb-5">
                        <span className="mb-2 d-block pinkcolor">
                          {v.caption}
                        </span>
                        <h5 className="fw-bold pb-2">{v.heading}</h5>
                        <div>
                          <p className="mb-0 opacity-75"> {v.paragraph} </p>
                          {/* opacity kam ki to color change ho gya more desent view */}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSec;
