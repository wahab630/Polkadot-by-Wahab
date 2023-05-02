import React from "react";
import "./hero.css";
import  { ScrollRotate } from 'react-scroll-rotate';
import Commonbtn from "../utils/Commonbtn";


const Hero = () => {
  return (
    <>
      <div className="container-fluid hero">
        <div className="container">
          <div className="row pt-3 pt-md-5">
            <div className="col-12 col-md-7 col-lg-6 mb-4 d-flex flex-column justify-content-center">
              <h1 className=" fw-bolder hero--h text-center  text-md-start">
                The multichain vision for  Web3 starts  here.
              </h1>
              <p className="lead text-center text-md-start">
                Polkadot unites and secures a growing ecosystem of <br />{" "}
                specialized blockchains called parachains. Apps and <br />{" "}
                services on Polkadot can securely communicate across <br />{" "}
                chains, forming the basis for a truly interoperable <br />{" "}
                decentralized web.
              </p>
              <div className="mt-2 hero-btn-div ">
                <Commonbtn name="Learn Parachains"/>
                <span className="me-2 mt-2"></span>
                <Commonbtn name="Learn Cross-Chain"/>
               
              </div>
            </div>
            <div class="col-12 col-md-5 col-lg-6 mb-4 px-xl-5 d-flex   align-items-center">
            <ScrollRotate method={"perc"} >
              <div className="outer col-md-6">            
                <ScrollRotate method={"perc"} >
                <img className=" w-100  " src="/assets/hero.png" alt="" />
                </ScrollRotate>              
              </div>
              </ScrollRotate> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
