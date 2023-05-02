import React from 'react'
import BlogSec from '../components/elements/BlogSec'
import Founded from '../components/elements/Founded'
import Hero from '../components/elements/Hero'

import Network from '../components/elements/Network'
import NetworkCards from '../components/elements/NetworkCards'
import Opensource from '../components/elements/Opensource'
import Section from '../components/elements/Section'
import Commonbase from '../components/utils/Commonbase'


const Home = () => {
  return (
    <>
    <Hero/>
    <Section/>
    <Network/>
    <NetworkCards/>
    <Opensource/>
    <Founded/>
    <BlogSec/>
   
    <Commonbase 
     heading="Want to get involved?"
     btnName="Join the Community"
     textOne="or learn about how to"
     textTwo="  build on Polkadot"
    />
    </>
  )
}

export default Home