import { Lato } from "next/font/google"
import Image from "next/image"
import Header from "./components/Header"

const lato = Lato({
  subsets: ['latin'],
  weight: ["400", "700"]
})

export default function LandingPage01() {
  return (
    <>
      <Header />
      <div className={`${lato.className} flex flex-col w-full sm:w-4/5 mx-auto h-full my-8 sm:my-2 top-4 justify-center items-center gap-3 sm:gap-5 md:gap-8`}>
        <h1 className="text-center  text-zinc-950 text-4xl sm:text-6xl lg:text-7xl font-bold sm:tracking-wide"><span className="black-gradient">Venha descobrir coisas novas conosco</span></h1>
        <div className="mx-2 sm:w-[632px] text-center text-zinc-950 text-lg sm:text-xl lg:text-3xl sm:leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel.</div>
        <button className="px-14 py-5 bg-orange-600 rounded-[40px] hover:bg-orange-900">
          <span className="text-white text-[22px] leading-4">Começar</span>
        </button>
        <Image
          src='/weird.png'
          alt="boneco estranho"
          width={100}
          height={250}
        />
      </div>
    </>
  )
}
