import React from 'react'
import './bstart.css'

const Bstart = () => {
  return (
    <>
    <div className="join">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-12 text-center">
              <span className="h1 fw-bold d-block mb-4">
              Start building your custom  <br /> parachain with Substrate
              </span>
              <a className="btn btn-lg join-btn fw-bold rounded-pill py-3" href="/community">
               Substrate Developer hub
              </a>
              <span className="d-block mt-3">
                or &nbsp;
                <span className="underline">
                learn More
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

export default Bstart