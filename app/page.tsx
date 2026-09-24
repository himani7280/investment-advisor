import React from 'react'
import HeroSection from './home/HeroSection'
import AboutSection from './home/AboutSection'
import ServiceSection from './home/ServiceSection'
import Whychoose from './home/Whychoose'
import HowItWorks from './home/HowItWorks';
import Trusted from './home/Trusted'
import Testimonials from './home/Testimonials'
import BlogsSection from './home/BlogsSection'
import OurPartners from './home/OurPartners'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <Whychoose/>
      <HowItWorks/>
      <Trusted/>
      <OurPartners/>
      <Testimonials/>
      <BlogsSection/>
    </div>
  )
}

export default page