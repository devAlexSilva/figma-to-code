import bagEcommerce from '@/app/landing-03/assets/bag-ecommerce.png'

import Image from "next/image"

const Navbar = () => {
  return (
    <header className="w-full h-20 bg-white">
      <div className="max-w-[1230px] py-6 mx-auto flex justify-between items-center">
        <h1 className="text-sky-700 text-4xl font-bold uppercase">BAYSIDE FINE JEWELRY</h1>
        <nav className="flex justify-between items-center">
          <ul className="flex gap-16 text-neutral-700 text-base font-bold tracking-tight">
            <li>Home</li>
            <li>Shop</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <div className="w-6 h-6 relative">
                <Image className="w-6 h-6 left-0 top-0 absolute" src='https://via.placeholder.com/24x24' width={24} height={24} alt='bag ecommerce' />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar