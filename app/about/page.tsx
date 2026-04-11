import Aboutdetails from '@/components/Aboutdetails'
import Hero from '@/components/Hero'
import MissionVision from '@/components/MissionVision'
import Team from '@/components/Team'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero
				bgImg="https://plus.unsplash.com/premium_photo-1677849935464-e124c78d74d6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8"
				heading="About Us"
				paragraph="We are driving high-integrity climate action and sustainbale growth through expert project development and strategic advisory."
			/>
      <MissionVision />
      <Aboutdetails />
      <Team />
    </>
  )
}

export default page