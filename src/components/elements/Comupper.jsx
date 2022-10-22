import React from 'react'
import './comupper.css'

const Comupper = () => {
  return (
    <>
      <div className="join">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-12 text-center">
              <span className=" h2 fw-bold d-block mb-4">
              Want to become a validator?
              </span>
              <a className="btn  join-btn fw-bold rounded-pill " href="/community">
               Read more
              </a>
              <span className="d-block mt-3">
              You can see validator stats on&nbsp;
                <span className="underline">
                Telemetry.
                </span>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comupper