import React from 'react'
import Comgetgrant from '../components/elements/Comgetgrant'
import Comgetting from '../components/elements/Comgetting'
import Comjoin from '../components/elements/Comjoin'

import Comrun from '../components/elements/Comrun'
import Comsection from '../components/elements/Comsection'
import Comupcoming from '../components/elements/Comupcoming'
import Comupper from '../components/elements/Comupper'
import Comvalidator from '../components/elements/Comvalidator'
import Commonbase from '../components/utils/Commonbase'

const Community = () => {
  return (
    <>
    <Comjoin/>
    <Comsection/>
    <Comrun/>
    <Comgetting/>
    <Comvalidator/>
    <Comupper/>
    <Comgetgrant/>
    <Comupcoming/>
    <Commonbase
     heading="Get your questions answered     "
     btnName="Join the Polkadot Chat"
     textOne="or learn how to"
     textTwo="  build on Polkadot"
    />
    </>
  )
}

export default Community