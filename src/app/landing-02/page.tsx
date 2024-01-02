import { Metadata } from "next"
import { Lato } from "next/font/google"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"

const lato = Lato({
  subsets: ['latin'],
  weight: ["400", "700"]
})

export const metaData: Metadata = {
  title: 'landing page 02',
  description: 'landing page with focus in show infomartion about a especific service'
}

const LandingPage02 = () => {
  return (
    <div className={lato.className}>
      <Header />
      <Hero />
      <Services />
    </div>
  )
}

export default LandingPage02