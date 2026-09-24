import React from 'react'
import Hero from './Hero'
import Aboutus from './Aboutus'
import Trusted from '../home/Trusted'
import HowItWorks from '../home/HowItWorks'
import OurPartners from '../home/OurPartners'

const page = () => {
  return (
    <div>
        <Hero/>
        <Aboutus/>
        <Trusted/>
        <HowItWorks/>
        <OurPartners/>
    </div>
  )
}

export default page