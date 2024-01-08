import section02 from '@/app/landing-03/assets/section02.png'
import Image from "next/image"

const SectionInfo = () => {
  return (
    <div className="w-full h-[620px] flex mt-16">
      <div className="bg-sky-900 w-[45%]">
        <div className='my-36 flex flex-col items-start gap-4 ml-20'>
          <h2 className="w-[417px] text-white text-5xl font-black uppercase tracking-tight">Hand Crafted  fine pieces.</h2>
          <p className='w-[517px] text-white text-2xl font-bold tracking-tight'> We also firmly believed that our customers deserved more choices, straightforward information and legendary service.
          </p>
          <button className="px-9 py-3 mt-10 bg-white rounded shadow">LEARN MORE</button>
        </div>
      </div>
      <div className="w-[55%]">
        <Image className='w-full h-full' src={section02} alt="section image" />
      </div>
    </div>
  )
}

export default SectionInfo