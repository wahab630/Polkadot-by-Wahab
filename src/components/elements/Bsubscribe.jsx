import React from "react";
import './bsubscribe.css'

const Bsubscribe = () => {
  return (
    <>
      <div className="Bsubscribe">
        <div className="container">
          <div className="row text-center">
            <div className="text-center">
              <div className="col-lg-8 text-center mx-auto">
                <h3 className="text-black  fw-bold display-6">
                  Subscribe to the newsletter <br /> to hear about updates and{" "}
                  <br /> events.
                </h3>

                <button className="btn btn-lg sub-btn small fw-bold mt-5 p-3">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bsubscribe;
