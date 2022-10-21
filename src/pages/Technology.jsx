import React from 'react'
import Tbuild from '../components/elements/Tbuild'
import Tconnecting from '../components/elements/Tconnecting'
import Tnetwork from '../components/elements/Tnetwork'
import Tparachains from '../components/elements/Tparachains'
import TScalable from '../components/elements/TScalable'
import Tsection from '../components/elements/Tsection'

const Technology = () => {
  return (
    <>
    <TScalable/>
    <Tsection/>
    <Tnetwork/>
    <Tconnecting/>
    <Tbuild/>
    <Tparachains/>
    </>
  )
}

export default Technology