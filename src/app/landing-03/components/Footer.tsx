import footerImage from '@/app/landing-03/assets/footer-image.png'
import Image from "next/image"

const Footer = () => {
  return (
    <div className="w-full bg-sky-200 mt-16">
      <div className='max-w-[1230px] mx-auto'>
        <div className='flex w-[943px] items-center h-[600px] mx-auto'>
          <div className="w-[50%] h-[450px]">
            <Image className='w-full h-full' src={footerImage} alt="jewelry" />
          </div>
          <div className="bg-white text-center w-[50%] h-[450px] flex flex-col justify-center items-center tracking-tight font-bold">
            <h2 className="w-[362px] text-sky-900 text-4xl">STAY IN TOUCH?</h2>
            <p className="w-[362px] text-neutral-700 font-normal font-['Open Sans']">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <button className="px-9 py-3 mt-9 text-white bg-sky-900 rounded">SUBSCRIBE</button>
          </div>
        </div>

        <div className='flex gap-32'>
          <ul className="text-zinc-600 text-base font-bold leading-loose tracking-tight">
            <h3 className="text-neutral-700 text-xl pb-6">Product</h3>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <ul className="text-zinc-600 text-base font-bold leading-loose tracking-tight">
            <h3 className="text-neutral-700 text-xl pb-6">Resources</h3>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
          <ul className="text-zinc-600 text-base font-bold leading-loose tracking-tight">
            <h3 className="text-neutral-700 text-xl pb-6">Company</h3>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className='w-full mt-9 border-t border-gray-300 h-24'>
        <div className='flex justify-between items-center h-full max-w-[1230px] mx-auto'>
          <span>© Blue Diamond Jewelry™ 2024</span>
          <div>
            <img className="w-8 h-8" src="https://via.placeholder.com/32x32" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer