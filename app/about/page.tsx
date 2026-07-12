import Aboutdetails from '@/components/Aboutdetails'
import Hero from '@/components/Hero'
import Hero3 from '@/components/Hero3'
import MissionVision from '@/components/MissionVision'
import Team from '@/components/Team'
import React from 'react'

const page = () => {
  return (
    <>
      {/* <Hero3
        heroTitle='About TerraCarbon Consults'
        bigTxt='Building Trusted Carbon Solutions.'
        paragraphTxt='We help organizations develop high-integrity carbon projects through expert advisory, technical support, and market-focused solutions.'
        heroImg='https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=2000'
        heroThemeColor='#0f766e'
      /> */}
      <Hero
        bgImg="https://plus.unsplash.com/premium_photo-1677849935464-e124c78d74d6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8"
        heading="About Us"
        paragraph="We are driving high-integrity climate action and sustainbale growth through expert project development and strategic advisory."
      />
      <MissionVision />
      <Aboutdetails />
      {/* <Team /> */}
    </>
  )
}

export default page