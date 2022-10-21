import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar--secondary navbar-expand-lg navbar-light bg-white border-bottom py-0">
        <div className="container">
          <div className="navbar-collapse navMenu justify-content-between collapse show">
            <div className="d-flex justify-content-end justify-content-lg-start pt-1 pt-md-0 order-2 order-lg-1">
              <div className="dropdown dropdown-lng-choice">
                <button
                  className="btn dropdown-toggle btn-lng-choice mb-1 mb-lg-0"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="lng text-uppercase">en</span>
                </button>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="es"
                    href="/es/"
                  >
                    español
                  </a>
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="zh-cn"
                    href="/zh-cn/"
                  >
                    中文
                  </a>
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="ja"
                    href="/ja/"
                  >
                    日本語
                  </a>
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="ko"
                    href="/ko/"
                  >
                    한국어
                  </a>
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="ru"
                    href="/ru/"
                  >
                    русский
                  </a>
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="tr"
                    href="/tr/"
                  >
                    Türkçe
                  </a>
                </div>
              </div>
            </div>
            <div className="py-1 d-flex flex-wrap align-items-center justify-content-between justify-content-lg-end order-1 order-lg-2">
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item">
                  <span className="text-small nav-link px-2 me-3 fw-bold ">
                    {" "}
                    Lightpaper
                  </span>
                </li>

                <li className="nav-item">
                  <span className="text-small nav-link px-2 me-3 fw-bold">
                    {" "}
                    Whitepaper
                  </span>
                </li>
                <li className="nav-item">
                  <span className="text-small nav-link px-2 me-3 fw-bold">
                    Wiki
                  </span>
                </li>
              </ul>
              <ul className=" navbar-nav d-none d-lg-flex flex-row ">
                <li>
                  {" "}
                  <FaGithub className="pe-2" size={30} />{" "}
                </li>
                <li>
                  <FaDiscord className="pe-2" size={30} />
                </li>
                <li>
                  {" "}
                  <FaTwitter className="pe-2" size={30} />{" "}
                </li>

                <li>
                  {" "}
                  <button className=" fw-bold px-3 py-1 nav-btn text-small">
                    {" "}
                    Support
                  </button>{" "}
                </li>
              </ul>
            </div>
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
