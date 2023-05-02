import React from 'react'
import Bpolkadot from '../components/elements/Bpolkadot'

import Commonbase from '../components/utils/Commonbase'

const Blog = () => {
  return (
    <>
    <Bpolkadot/>
    <Commonbase
    heading="Subscribe to the newsletter to hear about updates and events."
    btnName="Subscribe"
    />
    </>
  )
}

export default Blog