import React from 'react'
import './apress.css'

const Apress = () => {
  return (
    <>
    <div className="apress ">
        <div className="container">
            <h1 className='fw-bold text-center pb-5'>In the press:</h1>
            <div className="row">
                <div className="col-lg-2 col-md-6">
                    <img className='Apress-img' src="assets/logo-techcrunch.svg" alt="no" />
                </div>
                <div className="col-lg-2 col-md-6">
                    <img className='Apress-img' src="assets/logo-wsj.svg" alt="no" />
                </div>
                <div className="col-lg-2 col-md-6">
                    <img className='Apress-img' src="assets/logo-theblock.svg" alt="no" />
                </div>
                <div className="col-lg-2 col-md-6">
                    <img className='Apress-img' src="assets/logo-economist.svg" alt="no" />
                </div>
                <div className="col-lg-2 col-md-6">
                    <img className='Apress-img' src="assets/logo-coindesk.svg" alt="no" />
                </div>
                <div className="col-lg-2 col-md-6">
                    <img className='Apress-img' src="assets/logo-bloomberg.svg" alt="no" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Apress