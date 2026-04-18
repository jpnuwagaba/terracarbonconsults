import Hero from '@/components/Hero'
import CommunityMandate from '@/components/CommunityMandate'
import Methodology from '@/components/Methodology'
import TechnicalCompliance from '@/components/TechnicalCompliance'

const page = () => {
  return (
    <>
      <Hero
        bgImg="https://plus.unsplash.com/premium_photo-1741910232727-a30cba89ac64?q=80&w=648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Our Methodology"
        paragraph="Bridging the gap between raw ecosystem data and
verified carbon outcomes through a rigorous, tech-
enabled framework."
      />
      <Methodology />
      <CommunityMandate />
      <TechnicalCompliance />
    </>
  )
}

export default page
