import React from 'react'
import './comlover.css'

const Comlower = () => {
  return (
    <>
    <div className="join">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-12 text-center">
              <span className="h1 fw-bold d-block mb-4">
              Get your questions  <br />answered
              </span>
              <a className="btn  join-btn fw-bold rounded-pill " href="/community">
               Join the Polkadot chat
              </a>
              <span className="d-block mt-3">
              or learn how to&nbsp;
                <span className="underline">
                build on Polkadot.
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

export default Comlower