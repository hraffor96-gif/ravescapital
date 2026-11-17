'use client'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Focus from '../components/Focus'
import Approach from '../components/Approach'
import Philosophy from '../components/Philosophy'
import RiskReturn from '../components/RiskReturn'
import Partners from '../components/Partners'
import WhyRaves from '../components/WhyRaves'
import Stewardship from '../components/Stewardship'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <Approach />
        <Philosophy />
        <RiskReturn />
        <Partners />
        <WhyRaves />
        <Stewardship />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
