import React from 'react'


const Ttransparent = () => {
  return (
    <>
    <div className="container ttransparent">
        <div className="row ">
          <div className="col-lg-6 col-md-6 d-flex align-items-center ">
            <img
              src="assets/td1.svg"
              alt="no"
              className="ttransparent-img d-block"
            />
          </div>
          <div className="col-md-6 col-lg-6">
            <h1 className="fw-bold mb-3">
            Transparent on-chain governance
            </h1>
            <p>
            Updates to the protocol happen fork-free via transparent on-chain voting, so protocol development never stalls due to the lack of a clear process. The relay chain uses a sophisticated governance mechanism that is designed to establish a transparent, accountable and binding process for resolving disputes and upgrading the network.
            </p>
            <p>DOT tokens are used to participate in governance decisions, including tabling proposals, voting, and bonding.</p>
            <p>Parachains are free to design their own governance mechanisms, allowing for maximum freedom without affecting other parachains.</p>
            <p>Learn more about Polkadot’s governance</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ttransparent