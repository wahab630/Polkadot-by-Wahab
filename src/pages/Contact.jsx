import React from 'react'
import Aboutsection from '../components/elements/Aboutsection'
import Contactget from '../components/elements/Contactget'

import Commonbase from '../components/utils/Commonbase'

const Contact = () => {
  return (
    <>
    <Contactget/>
    <Aboutsection/>
    <Commonbase
    heading="Have a question about building on Polkadot?"
    btnName="Let's Connect"
    />
    
     </>
  )
}

export default Contact