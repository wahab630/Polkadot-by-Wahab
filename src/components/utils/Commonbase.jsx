import React from 'react'

const Commonbase = (props) => {
  return (
    <>
     <div className="commonbase">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-12 col-md-8 col-lg-6 text-center">
              <h1 className=" fw-bold d-block mb-5">
               {props.heading}
              </h1>
              <button className="btn  commonbase-btn fw-bold " href="/community">
                {props.btnName}
              </button>
              <span className="d-block mt-3">
               {props.textOne}
                <span className="underline">
                  {props.textTwo}
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

export default Commonbase