import React from "react";

const Bpolkadot = () => {

  const data=[
    {
      img:"https://polkadot.network/content/images/2022/10/image1.png",
      caption:"Parachain",
      heading:"  First Parachain Successfully Migrates from Kusama to      Polkadot",
      paragraph:"KILT Protocol's migration from Kusama to Polkadot is an      important technical milestone and the first parachain migration. Polkadot's 'canary network' model allows Web3      projects to test their technology in a real-world environment before upgrading to stable production      networks...."
    },
    {
      img:"https://polkadot.network/content/images/2022/09/004-smol.png",
      caption:"Polkadot",
      heading:"Polkadot Roadmap Roundup",
      paragraph:" A proposed roadmap for upcoming developments on Polkadot.      Get the latest status on asynchronous backing, parathreads, XCMv3, governance, common-good parachains and      more...."
    },
    {
      img:"https://polkadot.network/content/images/2022/08/image1.jpg",
      caption:"Polkadot",
      heading:"  Sub0, the Polkadot Developer Conference, comes to Lisbon in      November",
      paragraph:"The two-day live sub0 conference will run on November      28th-29th. Featuring keynote presentations, breakout sessions, workshops &amp; side events. Sign up for ticket      updates...."
    },
    {
      img:"https://polkadot.network/content/images/2022/08/CGPs.png",
      caption:"Polkadot",
      heading:"    Proposal for Common Good Parachains",
      paragraph:" Introducing a proposed roadmap for future developments on      common good parachains, subject to approval by Polkadot's      decentralized governance community...."
    },
    {
      img:"https://polkadot.network/content/images/2022/07/Frame-4.png",
      caption:"Polkadot",
      heading:" Gov2: Polkadot’s Next Generation of Decentralised Governance",
      paragraph:" Read the proposal for Polkadot's next-generation      governance system - currently known as Gov2 - to discover how it aims to advance the decentralisation of the      network...."
    },
    {
      img:"https://polkadot.network/content/images/2022/06/Staking_blogpost.png",
      caption:"Polkadot",
      heading:"Introducing the Polkadot Staking Dashboard: The Easiest Way      to Nominate and Stake Your DOT",
      paragraph:" Staking your DOT just got a whole lot easier with      Polkadot’s new staking dashboard, a user-friendly interface for staking natively on Polkadot...."
    },
    {
      img:"https://polkadot.network/content/images/2022/04/XCMv2--2-.png",
      caption:"Parachain",
      heading:"XCMv2 Audit Completed by Quarkslab",
      paragraph:"XCMv2 has now been audited for a second time to discover any potential cross-chain security or fairness issues, including logical bugs, denial-of-service, and incorrect lock/unlock or burn/mint on both chains..."
    },
    {
      img:"https://polkadot.network/content/images/2022/01/Encointer-Blog-Cover-1.jpeg",
      caption:"Kusama",
      heading:"Introducing Encointer: Making Web3 Truly Inclusive",
      paragraph:"Encointer is Kusama’s second common-good parachain slot . In this post, we take an in-depth look at Encointer and the problems it addresses — how it can bring financial inclusivity to Web3 and mitigate Sybil attacks with a novel ‘proof-of-personhood’ system for unique identity...."
    },
    {
      img:"https://polkadot.network/content/images/2022/01/cover-image.png",
      caption:"Polkadot",
      heading:"Polkadot v1.0: Sharding and Economic Security",
      paragraph:"This post is about the technology powering Polkadot. Polkadot is a sharded blockchain with heterogeneous shards...."
    },
    {
      img:"https://polkadot.network/content/images/2021/12/2021-Roundup.jpg",
      caption:"Polkadot",
      heading:"Polkadot 2021 Roundup",
      paragraph:"The holiday season is coming around again and with the new year, let’s take a quick retrospective about what the Polkadot project achieved over 2021...."
    },
    {
      img:"https://polkadot.network/content/images/2021/12/https---s3-us-west-2.amazonaws.com-secure.notion-static.com-59c5317d-bde0-465f-9671-b84997b246f2-Polkadot_Auctions_Report_-1-.png",
      caption:"Polkadot",
      heading:"Making History, Again: Polkadot Auctions 1-5",
      paragraph:"Following the successful completion of Polkadot's first batch of auctions, we review what happened and look at the data...."
    },
    {
      img:"https://polkadot.network/content/images/2021/12/Statemint-1.png",
      caption:"",
      heading:"Statemint Becomes First Common Good Parachain on Polkadot",
      paragraph:"After approval by the Polkadot community, the the Shell parachain was upgraded to Statemint, Polkadot’s common-good parachain for fungible and non-fungible assets...."
    },
   
  ]

  return (
    <>
      <div className="bpolkadot">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h1 className="h1 d-block display-4 fw-bold mb-5 aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
              >
                Polkadot blog
              </h1>
            </div>
          </div>
          <div className="row gy-4">
            {
              data.map((v,i)=>{
                return(
                <>
                 <div className="col-12 col-md-6 col-lg-4 d-flex ">
                <div className="card border-0 shadow ">                  
                    <img
                      className="card-img-top"
                      src={v.img}
                      alt="no"
                    />                
                  <div className="card-body py-3">
                    <span className="mb-2 d-block pinkcolor"> {v.caption}</span>  
                    <h5 className="fw-bold">
                   {
                    v.heading
                   }                    
                    </h5>  
                    <div>
                      <p className="mb-0">
                        {
                          v.paragraph
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
                </>
                )
               
              })
            }
          </div>         
       
          <div className="row ">
            <div className="col d-flex justify-content-center ">
              <div className=" my-5 ">
                <nav aria-label="Page navigation ">
                  <ul className="pagination page-m">
                    <li className="page-item">
                      <button className="page-link disabled">
                        Page 1 of 10
                      </button>
                    </li>

                    <li className="page-item">
                      <button className="page-link" >
                        <span className=" d-block pinkcolor"> Next</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bpolkadot;
