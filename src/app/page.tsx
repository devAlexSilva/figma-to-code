'use client'
import { data } from './homeData'
import HomeCard from './HomeCard'
import { useState } from 'react'

export default function Home() {
  const [selectedLandingPage, setSelectedLandingPage] = useState(0)

  return (
    <div className='h-[800px]'>
      <main>
        <img className='relative w-full h-[680px] rounded-b-3xl' src={data[selectedLandingPage].imageUrl} alt="" />
        <div className='absolute inset-0 w-full h-[680px] rounded-b-3xl bg-gray-400 backdrop-blur-sm bg-opacity-10'/>
        <div className='absolute inset-y-0 inset-x-0'>
          <div className='w-[90%] sm:w-[580px] ml-4 sm:ml-16 pt-2 md:pt-6 font-["Lato"] text-white'>
            <h1 className='text-7xl font-semibold tracking-wide'>{data[selectedLandingPage].title}</h1>
            <p className='my-8 text-2xl font-normal'>{data[selectedLandingPage].description}</p>
            <a href={data[selectedLandingPage].link}>
              <button className='w-56 h-16 px-3 py-1 rounded-[40px] bg-white text-teal-950 hover:bg-cyan-100'>
                Get started
              </button>
            </a>
          </div>
          <ul className='h-40 flex justify-center absolute z-10 bottom-10 md:bottom-[-5rem] gap-1 lg:gap-3 max-w-[92%] lg:max-w-[80%] mx-auto inset-x-0 rounded-3xl overflow-hidden'>
            {
              data.map((item, index) => <HomeCard key={index} index={index} item={item} selectLandingPage={setSelectedLandingPage} />)
            }
          </ul>
        </div>
      </main >
    </div>
  )
}
