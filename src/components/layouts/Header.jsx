import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" src="https://polkadot.network/assets/img/logo-polkadot.svg?v=ea608e625d" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                Technology
                </Link>
              </li>
              <li className="nav-item  ps-3">
                <Link to="./login" className="nav-link ">
                Community
                </Link>
              </li>
              <li className="nav-item  ps-3">
                <Link to="./login" className="nav-link ">
                About
                </Link>
              </li>
              <li className="nav-item  ps-3">
                <Link to="./login" className="nav-link ">
                Blog
                </Link>
              </li>
              <li className="nav-item  ps-3">
                <Link to="./signup" className="nav-link">
                Build
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link to="./signup" className="nav-link ">
                Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
