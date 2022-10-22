import React from "react";
import './acards.css';

const Acards = () => {
  return (
    <>
      <div className="Acards">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card shadow border-0 acard-cards">
                <div className="card-body">
                  <h3 className="fw-bold">Robert Habermeier</h3>
                  <p>Founder</p>
                  <p>
                    Robert Habermeier is a Thiel Fellow and co-founder of
                    Polkadot. He has a research and development background in
                    blockchains, distributed systems, and cryptography. A
                    longtime member of the Rust community, he has focused on
                    leveraging the language’s features to build highly parallel
                    and performant solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card shadow border-0 acard-cards">
                <div className="card-body">
                  <h3 className="fw-bold">Dr. Gavin Wood</h3>
                  <p>Founder</p>
                  <p>
                    Gavin began originating blockchain technology as co-founder
                    and CTO of Ethereum. He invented fundamental components of
                    the blockchain industry, including Solidity,
                    Proof-of-Authority consensus, and Whisper. At Parity, Gavin
                    currently leads innovation on Substrate and Polkadot. He
                    coined the term Web 3.0 in 2014 and serves as President of
                    Web3 Foundation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card shadow acard-cards border-0">
                <div className="card-body">
                  <h3 className="fw-bold">Peter Czaban</h3>
                  <p>Founder</p>
                  <p>
                    Peter is the Technology Director of the Web3 Foundation,
                    where he works on supporting the development of the next
                    generation of distributed technologies. He obtained his
                    Masters of Engineering degree at the University of Oxford,
                    reading Engineering Science where he focused on Bayesian
                    Machine Learning. He has worked across defense, finance and
                    data analytics industries, working on mesh networks,
                    distributed knowledge bases, quantitative pricing models,
                    machine learning and business development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acards;
