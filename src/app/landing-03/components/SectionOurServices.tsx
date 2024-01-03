import service01 from '@/app/landing-03/assets/service.png'
import Image from 'next/image'


const SectionOurServices = () => {
  return (
    <div className="h-96 max-w-[1230px] mx-auto my-72">
      <h1 className="w-[584px] h-10 mb-12 text-sky-900 text-4xl font-black uppercase tracking-tight">Our Services</h1>
      <div className='flex flex-col items-center'>
        <ul className='flex gap-8'>
          <li className='flex flex-col items-center'>
            <Image src={service01} alt='' />
            <span className='mt-4 text-sky-900 text-lg font-medium uppercase tracking-tight'>Jewelry Repair</span>
          </li>
          <li className='flex flex-col items-center'>
            <Image src={service01} alt='' />
            <span className='mt-4 text-sky-900 text-lg font-medium uppercase tracking-tight'>Ring Sizing</span>
          </li>
          <li className='flex flex-col items-center'>
            <Image src={service01} alt='' />
            <span className='mt-4 text-sky-900 text-lg font-medium uppercase tracking-tight'>Jewelry Polishing</span>
          </li>
        </ul>
        <button className="px-9 py-3 mt-14 text-white bg-sky-900 rounded text-base font-bold tracking-tight">LEARN MORE</button>
      </div>
    </div>
  )
}

export default SectionOurServices