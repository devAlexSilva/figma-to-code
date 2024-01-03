import { Metadata } from "next"
import Navbar from "./components/Navbar"
import { Lato } from 'next/font/google'
import Hero from "./components/Hero"
import SectionCategories from "./components/SectionCategories"
import SectionInfo from "./components/SectionInfo"
import SectionGallery from "./components/SectionGallery"
import SectionOurServices from "./components/SectionOurServices"

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Landing Ecommerce',
  description: 'ecommerce para campanhas',
}

const Landing03 = () => {
  return (
    <div className={`${lato.className} max-w-[1440px]`}>
      <Navbar />
      <Hero />
      <SectionCategories />
      <SectionInfo />
      <SectionGallery />
      <SectionOurServices />
    </div>
  )
}

export default Landing03