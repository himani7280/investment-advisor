

import Aboutus from './Aboutus'
import Trusted from '../home/Trusted'
import HowItWorks from '../home/HowItWorks'
import OurPartners from '../home/OurPartners'
import Hero from '../components/Hero'

const page = () => {
  return (
    <div>
        <Hero 
page="about"
        />
        <Aboutus/>
        <Trusted/>
        <HowItWorks/>
        <OurPartners/>
    </div>
  )
}

export default page