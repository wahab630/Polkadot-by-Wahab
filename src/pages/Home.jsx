import React from 'react'
import Blog from '../components/elements/Blog'
import Founded from '../components/elements/Founded'
import Hero from '../components/elements/Hero'
import Join from '../components/elements/Join'
import Network from '../components/elements/Network'
import NetworkCards from '../components/elements/NetworkCards'
import Opensource from '../components/elements/Opensource'
import Section from '../components/elements/Section'

const Home = () => {
  return (
    <>
    <Hero/>
    <Section/>
    <Network/>
    <NetworkCards/>
    <  Opensource/>
    <Founded/>
    <Blog/>
    <Join/>
    </>
  )
}

export default Home