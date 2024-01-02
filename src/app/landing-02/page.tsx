import { Metadata } from "next"
import { Lato } from "next/font/google"
import Header from "./components/Header"
import Hero from "./components/Hero"

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
      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default LandingPage02