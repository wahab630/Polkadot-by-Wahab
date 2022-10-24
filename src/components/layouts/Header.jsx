import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-none d-sm-block  sticky-top border-bottom">
        <div className="container">
     
    <DropdownButton id="dropdown-basic-button" title="EN" >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
 

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
            <ul className="navbar-nav ms-auto mb-0">
              <li className="nav-item">Lightpaper</li>
              <li className="nav-item ms-3">Whitepaper</li>
              <li className="nav-item  ms-3">Wiki</li>
              <li className="nav-item  ms-3 d-flex flex-row">
                <li className="nav-item ms-3  ">
                  <FaGithub size={20} />
                </li>
                <li className="nav-item  ms-3">
                  <FaDiscord size={20} />
                </li>
                <li className="nav-item ms-3 ">
                  <FaTwitter size={20} />
                </li>
              </li>

              <li className="nav-item ms-3">
                <button className="btn nav-btn">Support</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg  sticky-top border-bottom">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className="logo"
              src="https://polkadot.network/assets/img/logo-polkadot.svg?v=ea608e625d"
              alt=""
            />
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
                <Link to="/technology" className="nav-link ">
                  Technology
                </Link>
              </li>
              <li className="nav-item  ">
                <Link to="/community" className="nav-link ">
                  Community
                </Link>
              </li>
              <li className="nav-item  ">
                <Link to="/about" className="nav-link ">
                  About
                </Link>
              </li>
              <li className="nav-item  ">
                <Link to="/blog" className="nav-link ">
                  Blog
                </Link>
              </li>
              <li className="nav-item  ">
                <Link to="/build" className="nav-link">
                  Build
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/contact" className="nav-link ">
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
