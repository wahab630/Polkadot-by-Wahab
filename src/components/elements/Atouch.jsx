import React from 'react'
import './atouch.css'
const Atouch = () => {
  return (
    <>
    
    <div className="Atouch bg-dark">
        <div className="container">
        <h1 className='fw-bold text-center text-white pb-5'>Get in touch</h1>
            <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card d-flex flex-row rounded shadow border-0">
                <div className="d-flex  align-items-center ms-3">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-chat.svg?v=ea608e625d"
                    className="t-card-img"
                    alt="no"
                  />
                </div>

                <div className="card-body">
                  <h5 class="mb-1">For general chat</h5>
                  <p class="mb-0">Join the <span className='Atouch-color'>Watercooler</span>  or <span className='Atouch-color'>Discord</span> </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card d-flex flex-row rounded shadow border-0">
                <div className="d-flex  align-items-center ms-3">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-newsletter.svg?v=ea608e625d"
                    className="t-card-img"
                    alt="no"
                  />
                </div>

                <div className="card-body">
                  <h5 class="mb-1">For press inquiries</h5>
                  <p class="mb-0">Please fill out  <span className='Atouch-color'>this</span> form</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card d-flex flex-row rounded shadow border-0">
                <div className="d-flex  align-items-center ms-3">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-email.svg?v=ea608e625d"
                    className="t-card-img"
                    alt="no"
                  />
                </div>

                <div className="card-body">
                  <h5 class="mb-1">For all other inquiries</h5>
                  <p class="mb-0"><span className='Atouch-color'>support.polkadot.network</span> </p>
                </div>
              </div>
            </div>
            </div>
            <div className="row  pt-5 mt-3">
                <div className="col-lg-6 border-end">
                    <h2 className='text-white text-center fw-bold display-6'>Stay informed of updates and events</h2>
                    <p className='text-white lead text-center'>
                        <span className=" text-underline">Subscribe to the newsletter</span>&nbsp; or &nbsp;
                        <span className=" text-underline">read the blog</span>
                    </p>
                </div>
                <div className="col-lg-6 ">
                    <h2 className='text-white text-center fw-bold display-6'>Join the teams building Polkadot</h2>
                    <p className='text-white lead text-center'>
                    See jobs at
                        <span className=" text-underline">Web3 Foundation</span>&nbsp; or at &nbsp;
                        <span className=" text-underline">Parity Technologies</span>
                    </p>
                </div>
            </div>
        </div>
        </div></>
  )
}

export default Atouch