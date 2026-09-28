import React from 'react'
import Overview from './Overview'
import Hero from "../../components/Hero"

const page = () => {
  return (
    <div>
        <Hero page="serviceDetail"/>
        <Overview/>
    </div>
  )
}

export default page