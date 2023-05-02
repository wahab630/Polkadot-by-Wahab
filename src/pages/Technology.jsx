import React from 'react'
import Tbetter from '../components/elements/Tbetter'
import Tbuild from '../components/elements/Tbuild'
import Tconnecting from '../components/elements/Tconnecting'
import Tgrandpa from '../components/elements/Tgrandpa'
import Tgreen from '../components/elements/Tgreen'
import Tground from '../components/elements/Tground'
import Tnetwork from '../components/elements/Tnetwork'
import Tonchain from '../components/elements/Tonchain'
import Tparachains from '../components/elements/Tparachains'
import Troadmap from '../components/elements/Troadmap'
import TScalable from '../components/elements/TScalable'
import Tsection from '../components/elements/Tsection'
import Tteams from '../components/elements/Tteams'
import Ttransparent from '../components/elements/Ttransparent'

import Txcm from '../components/elements/Txcm'
import Commonbase from '../components/utils/Commonbase'

const Technology = () => {
  return (
    <>
    <TScalable/>
    <Tsection/>
    <Tnetwork/>
    <Tconnecting/>
    <Tbuild/>
    <Tparachains/>
    <Tground/>
    <Tbetter/>
    <Txcm/>
    <Tgreen/>
    <Ttransparent/>
    <Tonchain/>
    <Tgrandpa/>
    <Troadmap/>
    <Tteams/>
    <Commonbase
    heading="Want to get started?"
    btnName="Build on Polkadot"
    />
    </>
  )
}

export default Technology