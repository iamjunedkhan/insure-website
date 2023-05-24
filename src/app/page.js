import Image from 'next/image'
import AboutMore from './Components/AboutMore'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Section from './Components/Section'
import Service from './Components/Service'

export default function Home() {
  return (
    <main>
    <Navbar />
    <Section />
    <Service />
    <AboutMore />
    <Footer />   

    </main>
  )
}
