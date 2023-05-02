import React from 'react'
import Bstart from '../components/elements/Bstart'
import Buildeasily from '../components/elements/Buildeasily'
import Buildgrant from '../components/elements/Buildgrant'

import BuildPolkadot from '../components/elements/BuildPolkadot'

import Buildtools from '../components/elements/Buildtools'
import Commonbase from '../components/utils/Commonbase'

const Build = () => {
  return (
    <>
    <BuildPolkadot/>
    <Buildeasily/>
    <Buildtools/>
    <Bstart/>
    <Buildgrant/>
    <Commonbase
    heading="Have a question about building on Polkadot?"
    btnName="Let's Connect"
    />
    </>
  )
}

export default Build