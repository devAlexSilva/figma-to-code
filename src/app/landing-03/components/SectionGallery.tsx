import gallery01 from '@/app/landing-03/assets/gallery01.png'
import Image from "next/image"

const SectionGallery = () => {
  return (
    <div className="max-w-[1230px] mx-auto mt-16">
      <h1 className="w-[584px] h-10 mb-12 text-sky-900 text-4xl font-black uppercase tracking-tight">our latest jewelry</h1>
      <div className='flex flex-col items-center'>
        <ul className='flex gap-8'>
          <li className='flex flex-col items-center'>
            <Image src={gallery01} alt='' />
          </li>
          <li className='flex flex-col items-center'>
            <Image src={gallery01} alt='' />
          </li>
          <li className='flex flex-col items-center'>
            <Image src={gallery01} alt='' />
          </li>
        </ul>
        <button className="px-9 py-3 mt-14 text-white bg-sky-900 rounded text-base font-bold tracking-tight">VIEW GALLERY</button>
      </div>
    </div>
  )
}

export default SectionGallery