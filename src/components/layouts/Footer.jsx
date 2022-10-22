import React from "react";
import "./footer.css";
import { FaTwitter,FaReddit,FaGithub ,FaYoutube,FaDiscord} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footercolor pb-4 bg-dark">
        <div className="container pt-5">
          <div className="row">
          <div className="col-6 col-md-4 col-lg-3 mb-3 mb-md-0">
          <h5 className="">General</h5>
          <ul className="list-unstyled">
            <li className="py-0 py-md-1"><a href="/about" className="">About</a></li>
            <li className="py-0 py-md-1"><a href="https://telemetry.polkadot.io/" target="_blank" rel="nofollow noopener noreferrer" className="">Telemetry</a></li>
            <li className="py-0 py-md-1"><a href="/launch-roadmap" className="">Roadmap</a></li>
            <li className="py-0 py-md-1"><a href="/faq" className="">FAQ</a></li>
            <li className="py-0 py-md-1"><a href="https://support.polkadot.network" target="_blank" rel="nofollow noopener noreferrer" className="">Support</a></li>
            <li className="py-0 py-md-1"><a href="/build" className="">Build</a></li>
            <li className="py-0 py-md-1"><a href="https://web3.foundation/grants/" target="_blank" rel="nofollow noopener noreferrer" className="">Grants and Bounties</a></li>
            <li className="py-0 py-md-1"><a href="/jobs" className="">Careers</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-4 col-lg-3 mb-3 mb-md-0">
          <h5 className=" h5">Technology</h5>
          <ul className="list-unstyled">
            <li className="py-0 py-md-1"><a href="/technology" className="">Technology</a></li>
            <li className="py-0 py-md-1"><a href="/staking" className="">Staking</a></li>
            <li className="py-0 py-md-1"><a href="/cross-chain-communication" className="">XCM</a></li>
            <li className="py-0 py-md-1"><a href="/parachains" className="">Parachains</a></li>
            <li className="py-0 py-md-1"><a href="/dot-token" className="">Token</a></li>
            <li className="py-0 py-md-1"><a href="https://www.substrate.io" target="_blank" rel="nofollow noopener noreferrer" className="">Substrate</a></li>
            <li className="py-0 py-md-1"><a href="/Polkadot-lightpaper.pdf" className="" target="_blank" rel="nofollow noopener noreferrer">Lightpaper</a></li>
            <li className="py-0 py-md-1"><a href="/PolkaDotPaper.pdf" className="" target="_blank" rel="nofollow noopener noreferrer">Whitepaper</a></li>
          </ul>
        </div>
        <div className="col-12 col-md-4 col-lg-2 col-xl-3 mb-3 mb-md-4 mb-lg-0">
          <h5 className="c h5">Community</h5>
          <ul className="list-unstyled">
            <li className="py-0 py-md-1"><a href="/community" className="c">Community</a></li>
            <li className="py-0 py-md-1"><a href="/academy" className="c">Academy</a></li>
            <li className="py-0 py-md-1"><a href="/auctions" className="c">Auctions</a></li>
            <li className="py-0 py-md-1"><a href="/treasury" className="c">Treasury</a></li>
            <li className="py-0 py-md-1"><a href="https://wiki.polkadot.network"  className="c">Documentation</a></li>
            <li className="py-0 py-md-1"><a href="/blog" className="c">Blog</a></li>
            <li className="py-0 py-md-1"><a href="/brand-assets" className="c">Brand Assets</a></li>
            <li className="py-0 py-md-1"><a href="https://app.element.io/#/room/!FdCojkeGzZLSEoiecf:web3.foundation?via=matrix.parity.io&amp;via=matrix.org&amp;via=web3.foundation" target="_blank" rel="nofollow noopener noreferrer" className="c">Element Chat</a></li>
            <li className="py-0 py-md-1"><a href="https://medium.com/polkadot-network" target="_blank" rel="nofollow noopener noreferrer" className="c">Medium</a></li>
          </ul>
        </div>
        <div className="col-12 col-lg-3 px-lg-0 mt-4 mt-lg-0">
          <ul className="list-social-links list-unstyled justify-content-start justify-content-lg-between mb-4 mb-md-5 mb-lg-4 mb-xl-3 d-flex">
            <li> <FaTwitter  size={30}/>  </li>
            <li> <FaReddit size={30}/> </li>
            <li> <FaGithub size={30}/> </li>
            <li>< FaYoutube size={30}/> </li>
            <li><FaDiscord size={30}/></li>
            </ul>
          <p className="d-block ">Subscribe to the newsletter to hear about Polkadot updates and events.</p>
          <button className="btn footer-btn rounded-pill fw-bold d-block mb-1" data-toggle="modal" data-target="#subscribe_modal">Subscribe</button>
        </div> 
           
          </div>
          <div className="row  align-items-end mt-4 mt-lg-5 pt-md-4">
        <div className="col-12 col-lg-2 mb-2 mb-lg-3">
          <a className="navbar-brand" href="/">
            <img className="logo-img-footer" alt="Polkadot" src="https://polkadot.network/assets/img/logo-polkadot-light.svg?v=ea608e625d"/>
          </a>
        </div>
        <div className="col-12 col-lg-10 ">
          <ul className="list-unstyled d-flex flex-wrap ">
            <li>
              <span className="small  me-1">©
                 <a href="https://web3.foundation" className="">2022 Web3 Foundation</a>  {" "}</span>{" "}
            </li>
            <li><a href="/impressum" className="c small  me-1 "> | Impressum {" "} </a> </li>
            <li><a href="/disclaimer" className="c small me-1"> | Disclaimer</a> {" "} </li>
            <li><a href="/privacy" className="c small"> | Privacy</a></li>
          </ul>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
